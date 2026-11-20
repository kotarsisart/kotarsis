import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PCFShadowMap } from "three";

import ConcentratorModel from "./ConcentratorModel";

type ConcentratorDevice3DProps = {
  // Whether the device is currently active.
  isActive: boolean;

  // Callback triggered by pressing the device's physical button.
  onPress: () => void;
};

/**
 * Rendering settings for different viewport widths.
 *
 * shadows    — enables/disables real-time shadow rendering.
 * shadowSize — resolution of the shadow map in pixels.
 * maxDpr     — maximum device pixel ratio used by the renderer.
 */
type RenderQuality = {
  shadows: boolean;
  shadowSize: number;
  maxDpr: number;
};

/**
 * Selects rendering quality based on viewport width.
 *
 * Smaller screens use less expensive rendering settings
 * to reduce GPU workload and improve performance.
 *
 * Breakpoints:
 * < 768px   — mobile: shadows disabled.
 * < 1024px  — tablet: medium shadow resolution.
 * < 1280px  — small desktop: medium shadows, higher DPR.
 * >= 1280px — desktop: high-quality shadows and DPR.
 *
 * These settings depend on viewport width, not GPU capability.
 */
function getRenderQuality(width: number): RenderQuality {
  if (width < 768) {
    return {
      shadows: false,
      shadowSize: 512,
      maxDpr: 1.5,
    };
  }

  if (width < 1024) {
    return {
      shadows: true,
      shadowSize: 1024,
      maxDpr: 1.5,
    };
  }

  if (width < 1280) {
    return {
      shadows: true,
      shadowSize: 1024,
      maxDpr: 1.75,
    };
  }

  return {
    shadows: true,
    shadowSize: 2048,
    maxDpr: 2,
  };
}

/**
 * Renders the interactive 3D Concentrator device.
 *
 * Responsibilities:
 * - Configure the Three.js rendering environment.
 * - Provide camera, lighting, and shadows.
 * - Enable mouse/touch rotation.
 * - Adjust rendering quality for different screen widths.
 *
 * The actual device geometry is defined in ConcentratorModel.
 */
export default function ConcentratorDevice3D({
  isActive,
  onPress,
}: ConcentratorDevice3DProps) {
  /*
   * Start with mobile-quality settings for SSR compatibility.
   *
   * window.innerWidth is unavailable during server rendering.
   * The correct viewport configuration is applied after mounting.
   */
  const [quality, setQuality] = useState<RenderQuality>(
    () => getRenderQuality(350),
  );

  useEffect(() => {
    // Update rendering quality using the current viewport width.
    const updateQuality = () => {
      setQuality(getRenderQuality(window.innerWidth));
    };

    // Apply the correct configuration on initial mount.
    updateQuality();

    // Recalculate quality when the browser window is resized.
    window.addEventListener("resize", updateQuality);

    // Remove the listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", updateQuality);
    };
  }, []);

  return (
    <div className="concentrator-online__stage">
      {/*
        Canvas creates the WebGL rendering context and
        contains the entire Three.js scene.

        Coordinate system:
        X — horizontal (left/right).
        Y — vertical (up/down).
        Z — depth (forward/backward).
      */}
      <Canvas
        // Continuously render frames for animations and controls.
        frameloop="always"

        // Configure how Canvas responds to size changes.
        resize={{
          // Do not recalculate Canvas bounds on scroll events.
          scroll: false,

          // Apply resize measurements without debounce delay.
          debounce: 0,
        }}

        // Enable shadow rendering according to viewport quality.
        shadows={quality.shadows ? { type: PCFShadowMap } : false}

        // Device pixel ratio range [minimum, maximum].
        // Higher DPR produces sharper edges but costs GPU resources.
        dpr={[1, quality.maxDpr]}

        // Perspective camera configuration.
        camera={{
          // Initial camera position [X, Y, Z].
          position: [2.1, 3, 6.6],

          // Vertical field of view in degrees.
          // Smaller FOV makes the device appear larger.
          fov: 35,

          // Nearest visible distance from the camera.
          near: 0.1,

          // Farthest visible distance from the camera.
          far: 100,
        }}

        // WebGL renderer configuration.
        gl={{
          // Make the Canvas background transparent.
          alpha: true,

          // Smooth jagged edges using multisample anti-aliasing.
          antialias: true,

          // Request a high-performance GPU configuration.
          powerPreference: "high-performance",
        }}
      >
        {/*
          Ambient light.

          Illuminates all objects uniformly, regardless of direction.
          Does not cast shadows.

          Prevents dark surfaces from becoming completely black.
        */}
        <ambientLight intensity={1.5} />

        {/*
          Hemisphere light.

          Simulates environmental illumination from above and below.

          args:
          [0] Sky color — illumination from above.
          [1] Ground color — illumination from below.
          [2] Intensity — overall light strength.

          Adds subtle environmental shading to the device.
        */}
        <hemisphereLight
          args={["#dce9ff", "#29221c", 2]}
        />

        {/*
          Main directional light.

          Simulates a distant light source with parallel rays.
          Produces the primary highlights and ground shadow.
        */}
        <directionalLight
          // Position of the light source [X, Y, Z].
          position={[-3, 7, 6]}

          // Light intensity (brightness).
          intensity={3}

          // Generate shadows only when enabled by render quality.
          castShadow={quality.shadows}

          // Shadow map resolution [width, height] in pixels.
          // Larger maps provide more detail at a higher GPU cost.
          shadow-mapSize={[
            quality.shadowSize,
            quality.shadowSize,
          ]}

          // Small depth offset to reduce shadow acne:
          // unwanted dark artifacts caused by self-shadowing.
          shadow-bias={-0.0002}

          // Offset shadow sampling along surface normals.
          // Helps reduce artifacts on angled surfaces.
          shadow-normalBias={0.02}

          // Orthographic shadow camera boundaries.
          // Define the area in which shadows are calculated.
          // Smaller bounds concentrate shadow resolution.
          shadow-camera-left={-4}
          shadow-camera-right={4}
          shadow-camera-top={5}
          shadow-camera-bottom={-4}

          // Near/far clipping planes for shadow calculations.
          shadow-camera-near={0.5}
          shadow-camera-far={20}
        />

        {/*
          Secondary directional light (fill light).

          Illuminates the opposite side of the device
          to soften contrast and add a subtle blue tint.

          Does not cast shadows.
        */}
        <directionalLight
          // Light source position [X, Y, Z].
          position={[4, 3, -2]}

          // Brightness of the fill light.
          intensity={1.8}

          // Slightly cool light color.
          color="#b3c6ff"
        />

        {/*
          Device model.

          The device geometry uses its own local coordinates.

          Moving the parent group shifts the entire device
          downward without changing its internal geometry.

          isActive controls visual animations.
          onPress handles interaction with the physical button.
        */}
        <group position={[0, -1.4, 0]}>
          <ConcentratorModel
            isActive={isActive}
            onPress={onPress}
          />
        </group>

        {/*
          OrbitControls.

          Allows users to rotate the camera around the device
          using mouse dragging or touch gestures.

          The camera moves; the device itself stays stationary.
        */}
        <OrbitControls
          // Point around which the camera rotates [X, Y, Z].
          // Positioned approximately at the device's center.
          target={[0, 0.1, 0]}

          // Enable camera rotation.
          enableRotate

          // Disable mouse-wheel and touch zooming.
          enableZoom={false}

          // Prevent moving the camera target.
          enablePan={false}

          // Enable smooth deceleration after dragging.
          enableDamping

          // Damping factor: smaller values create longer inertia.
          dampingFactor={0.06}

          // Rotation sensitivity to mouse/touch movement.
          rotateSpeed={0.65}

          // Vertical rotation limits in radians.
          // PI / 3 = 60 degrees.
          // PI / 1.4 ≈ 128.6 degrees.
          // Horizontal rotation remains unrestricted.
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.4}
        />

        {/*
          Shadow-receiving ground plane.

          Rendered only when shadows are enabled.

          Uses a transparent shadow-only material,
          so the ground itself is invisible.

          The shadow remains visible over the page background.
        */}
        {quality.shadows && (
          <mesh
            // Rotate the default XY plane onto the XZ ground plane.
            // -PI / 2 radians = -90 degrees around the X axis.
            rotation={[-Math.PI / 2, 0, 0]}

            // Place the ground slightly below the device.
            position={[0, -1.42, 0]}

            // Allow this mesh to receive shadows.
            receiveShadow
          >
            {/* Plane dimensions [width, height] in world units. */}
            <planeGeometry args={[200, 200]} />

            {/*
              ShadowMaterial renders only received shadows.

              transparent — enables transparency.
              opacity     — controls shadow darkness.
            */}
            <shadowMaterial
              transparent
              opacity={0.08}
            />
          </mesh>
        )}
      </Canvas>
    </div>
  );
}
