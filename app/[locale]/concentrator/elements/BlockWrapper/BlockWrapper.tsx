"use client";

import { ReactNode } from "react";
import "./_block-wrapper.scss"
type BlockWrapperProps = {
  children: ReactNode;
};

export default function BlockWrapper({
  children,
}: BlockWrapperProps) {
  return (
    <section className="block-wrapper">
      {children}
    </section>
  );
}
