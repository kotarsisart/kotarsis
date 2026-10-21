import AppLayout from "./AppLayout/AppLayout";
import Instruction from "./Instruction/Instruction";

export default function HomePage({
  onRestart,
}: {
  onRestart?: () => void;
}) {

  return (
    <AppLayout>
      <Instruction />
      {/* <Instruction onRestart={onRestart} /> */}
    </AppLayout>
  );
}
