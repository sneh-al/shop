import React from "react";
import Section from "./ui/Section";
import Hero2Image from "@assets/aboutbg.png";

const About = () => {
  return (
    <Section title="About Us" className="" image={Hero2Image}>
      <p className="text-2xl md:text-4xl lg:text-6xl font-serif lg::leading-relaxed md:tracking-wide text-balance relative">
        At Donut Adda, we believe that every donut tells a story—a story of joy,
        indulgence, and a passion for crafting the perfect bite. What started as
        a small kitchen experiment turned into a full-blown love affair with
        donuts. We’ve been perfecting our recipes, using only the freshest
        ingredients, to bring you a delightful variety of flavors.
      </p>
    </Section>
  );
};

export default About;
