import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "Welcome To",
  "My Page",
  "Front-End Developer",
  "NextJS Specialist",
  "UI/UX Design",
  "Enjoy 💓",
];

export function Section2title() {
  return <MorphingText texts={texts} />;
}
