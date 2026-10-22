
import AppLayout from "./AppLayout/AppLayout";
import Instruction from "./Instruction/Instruction";
import Outro from "./Outro/Outro"

type MainPageProps = {
  screen: "intro" | "outro";
  onStart: () => void;
  onRestart: () => void;
};

export default function MainPage({
  screen,
  onStart,
  onRestart,
}: MainPageProps) {
  return (
    <AppLayout>
      {screen === "intro" ? (
        <Instruction onStart={onStart} />
      ) : (
        <Outro onRestart={onRestart} />
      )}
    </AppLayout>
  );
}
