"use client"

import AppLayout from "../components/AppLayout/AppLayout";
import Facts from "../components/Facts/Facts";
import Hero from "../components/Hero/Hero";
import '../globals.css';

export default function LocalePage() {
  return (
    <AppLayout>
      <Hero />
      <Facts />
    </AppLayout>
  );
}
