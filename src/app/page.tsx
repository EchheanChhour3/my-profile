

import { MarqueeDemo } from "@/asset/home/marqueedemo";
import FitnessHero from "@/components/mvpblocks/fitness-hero";
import { Section2title } from "@/asset/home/section2title";
import React from "react";
import { Section3 } from "@/asset/home/section3";

export default function page() {
  return (
    <div>
      <FitnessHero />
      <MarqueeDemo />
      <Section2title />
      <Section3 />
    </div>
  );
}
