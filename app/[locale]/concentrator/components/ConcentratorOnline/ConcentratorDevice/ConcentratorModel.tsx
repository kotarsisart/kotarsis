
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ConcentratorModelProps = {
  // Controls the active/inactive state of the device.
  isActive: boolean;

  // Called when the physical power button is clicked.
  onPress: () => void;
};

// Three-dimensional position: [X, Y, Z].
// X = left/right, Y = up/down, Z = forward/backward.
type Vec3 = [number, number, number];

type RoundedPanelProps = {
  width: number;
  height: number;

  // Corner radius of the panel's 2D outline.
  radius: number;

  // Extrusion depth along the local Z axis.
  depth?: number;

  color: string;
  position: Vec3;

  // Material properties, ranging from 0 to 1.
  roughness?: number;
  metalness?: number;

  // Whether the panel casts and receives shadows.
  castShadow?: boolean;
  receiveShadow?: boolean;
};

/**
 * Creates a centered 2D rectangle with rounded corners.
 *
 * THREE.Shape defines a flat outline using lines and curves.
 * This outline can later be extruded into a 3D object.
 *
 * The shape is centered around (0, 0), making it easier
 * to position and align with other components.
 */
function roundedRectangle(
  width: number,
  height: number,
  radius: number,
) {
  // Bottom-left corner of the rectangle.
  const x = -width / 2;
  const y = -height / 2;

  // Prevent the corner radius from exceeding panel dimensions.
  const r = Math.min(radius, width / 2, height / 2);

  const shape = new THREE.Shape();

  // Start at the bottom edge, after the bottom-left corner.
  shape.moveTo(x + r, y);

  // Bottom edge and bottom-right rounded corner.
  shape.lineTo(x + width - r, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + r);

  // Right edge and top-right rounded corner.
  shape.lineTo(x + width, y + height - r);
  shape.quadraticCurveTo(
    x + width,
    y + height,
    x + width - r,
    y + height,
  );

  // Top edge and top-left rounded corner.
  shape.lineTo(x + r, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - r);

  // Left edge and bottom-left rounded corner.
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);

  return shape;
}

/**
 * Reusable 3D panel with rounded corners and beveled edges.
 *
 * Used for the screen frame, screen glass, and power button.
 *
 * ExtrudeGeometry converts a flat 2D shape into a 3D mesh
 * by extending it along the local Z axis.
 */
function RoundedPanel({
  width,
  height,
  radius,
  depth = 0.02,
  color,
  position,
  roughness = 0.8,
  metalness = 0.04,
  castShadow = false,
  receiveShadow = true,
}: RoundedPanelProps) {
  // Cache the geometry until its dimensions change.
  // Avoids recreating the geometry on unrelated React renders.
  const geometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(
        roundedRectangle(width, height, radius),
        {
          // How far the 2D shape extends along local Z.
          depth,

          // Number of subdivisions along the extrusion depth.
          steps: 1,

          // Enable rounded edges around the extrusion.
          bevelEnabled: true,

          // How far the bevel extends along the extrusion axis.
          bevelThickness: 0.015,

          // How far the bevel extends beyond the 2D outline.
          bevelSize: 0.015,

          // Number of subdivisions used to smooth the bevel.
          bevelSegments: 5,

          // Number of segments used to approximate curved paths.
          curveSegments: 12,
        },
      ),
    [width, height, radius, depth],
  );

  // Release GPU geometry resources when no longer needed.
  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  return (
    <mesh
      geometry={geometry}
      position={position}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
    >
      {/*
        MeshStandardMaterial reacts to scene lighting.

        roughness:
        0 = smooth and reflective.
        1 = rough and matte.

        metalness:
        0 = non-metallic surface.
        1 = fully metallic surface.
      */}
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  );
}

/**
 * Main outer housing of the Concentrator.
 *
 * The body is generated procedurally from a side profile.
 * Extruding that profile creates the device's full width.
 *
 * This approach avoids importing a separate 3D model
 * and keeps the housing dimensions editable in code.
 */
function Body() {
  const geometry = useMemo(() => {
    /*
      Define the device's side profile in the Shape's XY plane.

      Shape X = housing depth.
      Shape Y = housing height.

      After rotating the resulting geometry around Y:
      local X maps to negative world Z,
      local Y remains world Y,
      extrusion depth maps to world X.

      The coordinates below describe the silhouette,
      including its sloped front and rounded corners.
    */
    const profile = new THREE.Shape();

    // Bottom edge of the housing.
    profile.moveTo(0.12, 0);
    profile.lineTo(1.28, 0);

    // Rounded lower rear corner and vertical rear wall.
    profile.quadraticCurveTo(1.4, 0, 1.4, 0.13);
    profile.lineTo(1.4, 2.75);

    // Rounded upper rear corner.
    profile.quadraticCurveTo(1.4, 2.96, 1.19, 2.96);

    // Flat top and transition into the sloped front.
    profile.lineTo(0.76, 2.96);
    profile.quadraticCurveTo(0.62, 2.96, 0.58, 2.81);

    // Sloped front surface.
    profile.lineTo(0.03, 0.77);
    profile.quadraticCurveTo(-0.02, 0.62, 0.02, 0.49);

    // Lower front section and rounded bottom corner.
    profile.lineTo(0.02, 0.12);
    profile.quadraticCurveTo(0.02, 0, 0.12, 0);

    // Close the outline to create a valid filled shape.
    profile.closePath();

    /*
      Extrude the 2D side profile into a 3D housing.

      depth controls the device's width before rotation.
      Bevel settings soften the outer edges.
    */
    const result = new THREE.ExtrudeGeometry(profile, {
      // Width of the device along the extrusion axis.
      depth: 2.65,

      // No additional subdivisions along the extrusion.
      steps: 1,

      // Round the sharp edges of the housing.
      bevelEnabled: true,

      // Bevel extension along the extrusion axis.
      bevelThickness: 0.22,

      // Bevel extension beyond the side-profile outline.
      bevelSize: 0.22,

      // More segments produce smoother rounded edges.
      bevelSegments: 16,

      // Smoothness of the curves in the side profile.
      curveSegments: 32,
    });

    // Rotate the extrusion 90 degrees around the Y axis.
    // The extruded width now runs along world X.
    result.rotateY(Math.PI / 2);

    // Center the 2.65-unit width around X = 0.
    // Half of 2.65 is 1.325.
    result.translate(-1.325, 0, 0);

    // Recalculate surface normals for lighting and shading.
    result.computeVertexNormals();

    return result;
  }, []);

  // Dispose of the manually created geometry on unmount.
  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      {/*
        Matte, dark plastic housing.

        High roughness reduces sharp reflections.
        Low metalness keeps the material non-metallic.
      */}
      <meshStandardMaterial
        color="#30312e"
        roughness={0.88}
        metalness={0.035}
      />
    </mesh>
  );
}

/**
 * Animated neon ring.
 *
 * Each ring consists of:
 * 1. A wider translucent outer glow.
 * 2. A thin, bright main ring.
 * 3. A short arc that travels around the ring on activation.
 *
 * The glow is approximated using transparent geometry,
 * rather than real light emission or post-processing bloom.
 */
function NeonRing({
  color,
  position,
  isActive,
}: {
  color: string;
  position: Vec3;
  isActive: boolean;
}) {
  // Direct references to Three.js materials.
  // Their opacity can be updated without React re-renders.
  const ringMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const glowMaterial = useRef<THREE.MeshBasicMaterial>(null);

  // Reference to the group containing the moving light arc.
  const pulseRef = useRef<THREE.Group>(null);

  // Animation progress: 0 = start, 1 = finished.
  const progress = useRef(1);

  // Tracks the previous state to detect OFF -> ON transitions.
  const previousActive = useRef(isActive);

  /*
    Create a partial torus for the moving light pulse.

    TorusGeometry parameters:
    [0] radius           — distance from center to tube center.
    [1] tube             — thickness of the tube.
    [2] radialSegments   — smoothness around the tube.
    [3] tubularSegments  — smoothness along the arc.
    [4] arc              — visible angular length in radians.

    PI / 3 = 60 degrees, so the pulse occupies 1/6
    of the full ring circumference.
  */
  const pulseGeometry = useMemo(
    () =>
      new THREE.TorusGeometry(
        0.32,
        0.026,
        16,
        64,
        Math.PI / 3,
      ),
    [],
  );

  // Release the custom pulse geometry on unmount.
  useEffect(() => {
    return () => pulseGeometry.dispose();
  }, [pulseGeometry]);

  /*
    useFrame runs on every rendered frame.

    delta is the elapsed time since the previous frame,
    measured in seconds.

    Animation values are updated directly on Three.js objects,
    avoiding React state updates on every frame.
  */
  useFrame((_, delta) => {
    /*
      Frame-rate-independent exponential smoothing.

      The value 4 controls transition speed:
      larger = faster, smaller = slower.

      The result is used as the interpolation factor
      for the ring and glow opacity.
    */
    const smooth = 1 - Math.exp(-4 * delta);

    // Target opacity for inactive and active states.
    const targetBrightness = isActive ? 1 : 0.7;
    const targetGlow = isActive ? 0.24 : 0.168;

    // Gradually adjust the main ring's opacity.
    if (ringMaterial.current) {
      ringMaterial.current.opacity = THREE.MathUtils.lerp(
        ringMaterial.current.opacity,
        targetBrightness,
        smooth,
      );
    }

    // Gradually adjust the outer glow's opacity.
    if (glowMaterial.current) {
      glowMaterial.current.opacity = THREE.MathUtils.lerp(
        glowMaterial.current.opacity,
        targetGlow,
        smooth,
      );
    }

    // Restart the pulse only when switching from OFF to ON.
    if (isActive && !previousActive.current) {
      progress.current = 0;
    }

    // Store the current state for the next frame.
    previousActive.current = isActive;

    // Cancel the moving pulse when the device turns off.
    if (!isActive) {
      progress.current = 1;
    }

    if (progress.current < 1 && pulseRef.current) {
      /*
        Advance the pulse over 1.2 seconds.

        Math.min prevents progress from exceeding 1.
      */
      progress.current = Math.min(
        progress.current + delta / 1.2,
        1,
      );

      // Normalize animation progress to the range [0, 1].
      const t = progress.current;

      // Rotate the arc one full revolution around local Z.
      // Negative rotation produces clockwise movement.
      pulseRef.current.rotation.z = -t * Math.PI * 2;

      /*
        Fade the pulse in and out using a sine curve.

        sin(0)  = 0
        sin(PI/2) = 1
        sin(PI) = 0

        This avoids abrupt appearance/disappearance.
      */
      const opacity = Math.sin(Math.PI * t);

      // Show the pulse while its animation is running.
      pulseRef.current.visible = true;

      // Access the arc mesh and its material.
      const mesh = pulseRef.current.children[0] as THREE.Mesh;
      const material = mesh.material as THREE.MeshBasicMaterial;

      // Apply the pulse's maximum opacity multiplier.
      material.opacity = opacity * 0.55;
    } else if (pulseRef.current) {
      // Hide the pulse after completion or cancellation.
      pulseRef.current.visible = false;
    }
  });

  return (
    <group position={position}>
      {/*
        Outer glow.

        A thicker, translucent torus creates a subtle halo.
        Its opacity is animated according to isActive.
      */}
      <mesh position={[0, 0, -0.02]}>
        {/*
          TorusGeometry:
          [radius, tube, radialSegments, tubularSegments]
        */}
        <torusGeometry args={[0.32, 0.045, 24, 192]} />

        <meshBasicMaterial
          ref={glowMaterial}
          color={color}

          // Enable transparency for the halo.
          transparent

          // Initial inactive-state opacity.
          opacity={0.168}

          // Prevent transparent geometry from writing to
          // the depth buffer and obscuring other surfaces.
          depthWrite={false}

          // Keep the selected neon color unaffected
          // by renderer tone mapping.
          toneMapped={false}
        />
      </mesh>

      {/*
        Main ring.

        A thinner torus placed slightly in front of the halo.
        MeshBasicMaterial does not react to scene lighting.
      */}
      <mesh position={[0, 0, -0.025]}>
        <torusGeometry args={[0.32, 0.019, 24, 192]} />

        <meshBasicMaterial
          ref={ringMaterial}
          color={color}
          transparent

          // Initial inactive-state opacity (70%).
          opacity={0.7}

          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/*
        Moving light pulse.

        Starts hidden and becomes visible during activation.
        The entire group rotates, carrying the arc with it.
      */}
      <group ref={pulseRef} visible={false}>
        <mesh
          geometry={pulseGeometry}

          // Place the pulse slightly in front of the main ring.
          position={[0, 0, 0.02]}
        >
          <meshBasicMaterial
            // White highlight contrasting with the neon ring.
            color="white"
            transparent

            // Initial opacity: invisible until animation starts.
            opacity={0}

            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Renders the CONCENTRATOR™ label as a texture.
 *
 * HTML Canvas 2D is used to draw the text into an image.
 * THREE.CanvasTexture converts that image into a texture
 * that can be applied to a flat 3D plane.
 *
 * This avoids loading an external font or image asset.
 */
function BrandLabel() {
  const texture = useMemo(() => {
    // Create an off-screen HTML canvas.
    const canvas = document.createElement("canvas");

    // Texture resolution in pixels.
    // Higher resolution produces sharper text at a memory cost.
    canvas.width = 1024;
    canvas.height = 160;

    // Obtain the 2D drawing context.
    const context = canvas.getContext("2d");

    // Skip rendering if the context is unavailable.
    if (!context) return null;

    // Clear the texture before drawing.
    context.clearRect(0, 0, 1024, 160);

    // Text color, font weight, size, and family.
    context.fillStyle = "#e8ebed";
    context.font = "700 80px Arial, sans-serif";

    // Center the text horizontally and vertically.
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Draw the text at the center of the canvas.
    context.fillText("CONCENTRATOR™", 512, 80);

    // Convert the HTML canvas into a Three.js texture.
    const result = new THREE.CanvasTexture(canvas);

    // Use sRGB for correct display of the text colors.
    result.colorSpace = THREE.SRGBColorSpace;

    return result;
  }, []);

  // Release the texture when the component unmounts.
  useEffect(() => {
    return () => texture?.dispose();
  }, [texture]);

  // Do not render the label if texture creation failed.
  if (!texture) return null;

  return (
    // Position relative to the parent Screen group.
    <mesh position={[0, -0.85, 0.145]}>
      {/* Flat plane dimensions in 3D world units. */}
      <planeGeometry args={[1.82, 0.285]} />

      <meshBasicMaterial
        // Apply the generated text texture.
        map={texture}

        // Preserve transparency around the letters.
        transparent

        // Avoid writing transparent pixels to the depth buffer.
        depthWrite={false}

        // Prevent tone mapping from changing text brightness.
        toneMapped={false}
      />
    </mesh>
  );
}

/**
 * Front display assembly.
 *
 * Built from three layered rounded panels:
 * outer frame, inner border, and screen glass.
 *
 * Neon rings and branding are positioned relative
 * to this group's local coordinate system.
 */
function Screen({ isActive }: { isActive: boolean }) {
  return (
    <group
      // Position of the screen assembly on the device.
      position={[0, 1.88, -0.1]}

      // Tilt around X in radians.
      // -0.26 radians is approximately -14.9 degrees.
      rotation={[-0.26, 0, 0]}
    >
      {/* Outer frame: largest and deepest panel. */}
      <RoundedPanel
        width={2.4}
        height={2.15}
        radius={0.2}
        depth={0.055}
        color="#1b1d1b"
        position={[0, 0, 0]}
      />

      {/* Inner border: slightly smaller, layered above the frame. */}
      <RoundedPanel
        width={2.27}
        height={2.02}
        radius={0.155}
        depth={0.025}
        color="#0d0f0e"
        position={[0, 0, 0.055]}
      />

      {/*
        Screen glass.

        Darker than the surrounding frame.
        Lower roughness creates a smoother surface.
      */}
      <RoundedPanel
        width={2.15}
        height={1.9}
        radius={0.115}
        depth={0.005}
        color="#030609"
        roughness={0.42}
        metalness={0.02}
        position={[0, 0, 0.073]}
      />

      {/*
        Three neon indicators arranged in a triangle.

        Each position is relative to the Screen group.
        Z = 0.14 places the rings in front of the glass.
      */}

      {/* Top-left: cyan. */}
      <NeonRing
        color="#00e5ff"
        position={[-0.48, 0.43, 0.14]}
        isActive={isActive}
      />

      {/* Top-right: magenta. */}
      <NeonRing
        color="#f000ed"
        position={[0.48, 0.43, 0.14]}
        isActive={isActive}
      />

      {/* Bottom-center: yellow. */}
      <NeonRing
        color="#ffe500"
        position={[0, -0.32, 0.14]}
        isActive={isActive}
      />

      {/* Product name below the neon indicators. */}
      <BrandLabel />
    </group>
  );
}

/**
 * Interactive physical power button.
 *
 * Consists of:
 * 1. A dark recessed base.
 * 2. A movable button surface.
 * 3. An invisible mesh used for pointer interaction.
 *
 * The visual pressed state is separate from the device's
 * active state, which is managed by the parent component.
 */
function PowerButton({ onPress }: { onPress: () => void }) {
  // Tracks whether the pointer is currently pressing the button.
  const [pressed, setPressed] = useState(false);

  return (
    <group
      // Position of the button assembly on the housing.
      position={[0, 0.47, 0.2]}

      // No additional rotation.
      rotation={[0, 0, 0]}
    >
      {/* Dark recessed base beneath the button. */}
      <RoundedPanel
        width={1.35}
        height={0.38}
        radius={0.12}
        depth={0.02}
        color="#10110f"
        position={[0, 0, 0]}
      />

      {/*
        Movable button surface.

        Reducing its local Z position when pressed creates
        the illusion of the button moving into its housing.
      */}
      <group position={[0, 0, pressed ? 0.025 : 0.045]}>
        <RoundedPanel
          width={1.2}
          height={0.24}
          radius={0.075}
          depth={0.045}
          color="#383a35"
          position={[0, 0, 0]}
          roughness={0.72}
        />
      </group>

      {/*
        Invisible interaction surface.

        Slightly larger than the visible button,
        making it easier to click or tap.

        A transparent mesh can still receive pointer events.
      */}
      <mesh
        // Place the interaction surface in front of the button.
        position={[0, 0, 0.13]}

        // Trigger the parent callback on a completed click.
        onClick={(event) => {
          event.stopPropagation();
          onPress();
        }}

        // Visually depress the button when pressing begins.
        onPointerDown={(event) => {
          event.stopPropagation();
          setPressed(true);
        }}

        // Restore the button when the pointer is released.
        onPointerUp={() => setPressed(false)}

        // Restore it if the pointer leaves the interaction area.
        onPointerOut={() => setPressed(false)}
      >
        {/* Invisible rectangular hit area [width, height, depth]. */}
        <boxGeometry args={[1.35, 0.4, 0.015]} />

        <meshBasicMaterial
          transparent
          opacity={0}

          // Prevent the invisible mesh from occluding the scene.
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/**
 * Combines all parts of the Concentrator into one 3D model.
 *
 * The parent scene controls the model's overall position,
 * camera, lighting, and shadows.
 */
export default function ConcentratorModel({
  isActive,
  onPress,
}: ConcentratorModelProps) {
  return (
    <group>
      <Body />
      <Screen isActive={isActive} />
      <PowerButton onPress={onPress} />
    </group>
  );
}
