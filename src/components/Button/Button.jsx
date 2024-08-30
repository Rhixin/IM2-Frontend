import { motion } from "framer-motion";

export default function Button({
  text,
  color,
  theme,
  width,
  height,
  css,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      className={`bg-customYellow p-2 pr-3 pl-3 text-center m-1.5 rounded-md text-black ${width} ${height} text-2xl shadow-lg`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "string", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
