"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years Of Experience",
  },
  {
    num: 4,
    text: "Projects Completed",
  },
  {
    num: 3,
    text: "Technologies",
  },
  {
    num: 350,
    text: "Code Commits",
  },
];

export default function State() {
  return (
    <section>
      <div className="container mx-auto mb-10">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-5xl font-extrabold dark:text-white text-black"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug dark:text-white/80 text-black`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
