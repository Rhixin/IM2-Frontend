import React, { useRef } from "react";
import Button from "./Button/Button.jsx";
import { motion, useInView } from "framer-motion";

function Banner({ theme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section className="text-blueGray-700  mb-60 ">
      <div className="container flex flex-col items-center px-0 py-16 mx-auto md:flex-row lg:px-1 mt-24">
        <div className="flex flex-col items-start text-left lg:flex-grow">
          <motion.h2
            ref={ref}
            className={`mb-8 text-2xl tracking-widest ${
              theme === "dark-mode" ? "text-white" : "text-black"
            } uppercase`}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Mas Sayon Na ang Pagsine!
          </motion.h2>
          <motion.h1
            className={`mb-8 text-5xl tracking-wide leading-tight ${
              theme === "dark-mode" ? "text-customYellow" : "text-black"
            } font-archivo`}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              textShadow:
                theme === "dark-mode"
                  ? "8px 6px 13px rgba(0, 0, 0, 1)"
                  : "none",
            }}
          >
            Your Cinema Journey Starts Here!
          </motion.h1>
          <motion.p
            className={`mb-8 tracking-wide text-2xl leading-relaxed text-left ${
              theme === "dark-mode" ? "text-white" : "text-black"
            } font-netflix`}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Discover the easiest way to book tickets and enjoy the latest
            blockbusters without the hassle.
          </motion.p>
          <div className="flex flex-col justify-center lg:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Button
                text={"See More"}
                color={"Yellow"}
                theme={theme}
                width={"w-44"}
                height={"h-16"}
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 lg:max-w-lg md:w-1/ relative ml-20">
          <motion.img
            className="object-cover object-center rounded-lg"
            alt="film roll"
            src={theme === "dark-mode" ? "light_roll.png" : "dark_roll.png"}
            initial={{ y: 100, rotate: 0, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: 360, opacity: 1 } : {}}
            transition={{
              y: { duration: 0.5 },
              opacity: { duration: 0.5 },
              rotate: {
                delay: 1,
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
