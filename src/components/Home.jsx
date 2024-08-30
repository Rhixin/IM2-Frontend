import Banner from "./Banner.jsx";
import Slider from "./Slider.jsx";
import ComingSoon from "./ComingSoon.jsx";

import { motion } from "framer-motion";

export default function Home({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <Banner theme={theme} />

      <Slider />
      <ComingSoon theme={theme} />
      <ComingSoon theme={theme} />
      <ComingSoon theme={theme} />
    </motion.div>
  );
}
