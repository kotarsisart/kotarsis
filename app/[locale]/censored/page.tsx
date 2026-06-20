"use client"

import AppLayout from './components/Layout/AppLayout';

import Hero from './components/Hero/Hero';
import Trust from './components/Trust/Trust';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Careers from './components/Careers/Careers';
import Pricing from './components/Pricing/Pricing';
import Report from './components/Report/Report';
import Victory from './components/Victory/Victory';
import BubbleCTA from './components/BubbleCTA/BubbleCTA';

import './globals.css';

export default function LocalePage() {
  return (
    <AppLayout>
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Careers />
      <Pricing />
      <Report />
      <Victory />

      <BubbleCTA />
    </AppLayout>
  );
}
