import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navigation = () => (
  <motion.ul variants={variants} className="absolute top-20 [&>li]:border-none">
    <Link to="/">
      <motion.li
        variants={variants2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Home
      </motion.li>
    </Link>
    <Link to="/form">
      <motion.li
        variants={variants2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Form
      </motion.li>
    </Link>
  </motion.ul>
);

export default Navigation;
