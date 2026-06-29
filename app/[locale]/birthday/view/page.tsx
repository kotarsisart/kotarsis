"use client"

import AppLayout from "../components/AppLayout/AppLayout";
import Facts from "../components/Facts/Facts";
import Hero from "../components/Hero/Hero";

export default function LocalePage() {
  return (
    <AppLayout>
      <Hero />
      <Facts />
    </AppLayout>
  );
}
