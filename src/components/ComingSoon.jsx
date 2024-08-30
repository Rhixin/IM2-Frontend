import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Button from "./Button/Button.jsx";

function FeatureBox({ theme }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });

  return (
    <motion.section
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
        transition: "opacity 0.5s ease, transform 0.1s ease",
      }}
      ref={ref}
    >
      <div className="container flex flex-col px-1 py-16 mx-auto md:flex-row lg:px-1 my-28">
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2 max-h-[27rem]">
          <img
            className="object-cover object-center rounded-lg w-full h-full"
            alt="hero"
            src="https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg"
          />
        </div>

        <div className="flex flex-col items-start justify-center lg:flex-grow ml-20 pl-10">
          <motion.h1
            className={`mb-8 text-2xl font-black tracking-tighter md:text-5xl title-font ${
              theme === "dark-mode" ? "text-white" : "text-black"
            }`}
          >
            Deadpool and Wolverine
          </motion.h1>
          <p
            className={`mb-8 text-base leading-relaxed text-left ${
              theme === "dark-mode" ? "text-white" : "text-black"
            }`}
          >
            Discover the easiest way to book tickets and enjoy the latest
            blockbusters without the hassle.
          </p>
          <div className="flex flex-col justify-center lg:flex-row">
            <Button text={"Coming Soon"} color={"Yellow"} theme={theme} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default FeatureBox;
