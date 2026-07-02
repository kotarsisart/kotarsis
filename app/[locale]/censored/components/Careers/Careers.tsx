"use client"

import { useState } from "react";

import CareersVacancy from "./CareersVacancy";
import CareersIntro from "./CareersIntro";
import CareersApplicationModal from "./CareersApplicationModal";

export default function Careers() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  return (
    <section
      id="careers"
      className="
        relative overflow-hidden
        bg-zinc-950
        px-4 py-8 bp-md:px-6 bp-md:py-32
      "
    >
      <CareersIntro />

      <CareersApplicationModal
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
      />

      <CareersVacancy
        onOpen={() => setIsApplicationOpen(true)}
      />
    </section>
  );
};
