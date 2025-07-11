"use client"

import React from "react";
import { motion } from "framer-motion";

export const Section3 = () => {
  return (
    <div className="grid justify-between 2xl:grid-cols-2 mx-40 my-20">
      <div>
        <section className="grid place-content-center px-8 py-24">
          <h1>hello</h1>
        </section>
      </div>
      <section className="grid place-content-center gap-2 px-6 py-24 text-black">
        <FlipLink href="#">Twitter</FlipLink>
        <div className="text-white">
          <FlipLink href="#">Linkedin</FlipLink>
        </div>
        <FlipLink href="https://www.facebook.com/share/16jqkEPswh/?mibextid=wwXIfr">
          Facebook
        </FlipLink>
        <div className="text-white">
          <FlipLink href="https://www.instagram.com/cxopoo1_?igsh=MXg2bTBoa2RucW56bw%3D%3D&utm_source=qr">
            Instagram
          </FlipLink>
        </div>
      </section>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FliplLinkProps {
  children: string;
  href: string;
}
const FlipLink: React.FC<FliplLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap text-xl font-black uppercase sm:text-2xl md:text-5xl lg:text-7xl"
      style={{
        lineHeight: 0.75,
      }}>
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
