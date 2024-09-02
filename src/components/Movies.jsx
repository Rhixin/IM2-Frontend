import { motion } from "framer-motion";
import MovieCard from "./MovieCard.jsx";
import ComingSoon from "./ComingSoon.jsx";
import Slider from "./Slider.jsx";
import NowShowing from "./NowShowing.jsx";

export default function Movies({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      exit={{ opacity: 0 }}
      className="flex-col justify-center align-center"
    >
      <NowShowing />
    </motion.div>
  );
}
