import AppLayout from "./HomeLayout/HomeLayout";
import Hero from "./Hero/Hero";
import Denial from "./Denial/Denial";
import Anger from './Anger/Anger';
import Bargaining from "./Bargaining/Bargaining";
import Acceptance from './Acceptance/Acceptance'
import Overflow from './Overflow/Overflow';
import Depression from "./Depression/Depression";

export default function HomePage({
  onRestart,
}: {
  onRestart?: () => void;
}) {

  return (
    <AppLayout>
      <Hero />
      <Denial />
      <Anger />
      <Bargaining />
      <Overflow />
      <Depression />
      <Acceptance onRestart={onRestart} />
    </AppLayout>
  );
}
