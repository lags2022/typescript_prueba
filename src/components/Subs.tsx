import List from "./List";
import { Sub } from "../types";
import { motion } from "framer-motion";

interface SubsProps {
  subs: Sub[];
  newSubsNumber: number;
  onClose: (nick: string) => void;
  handleOrder: (order: Array<Sub>) => void;
}

const Subs = ({ subs, newSubsNumber, onClose, handleOrder }: SubsProps) => {
  return (
    <div className="App w-[400px] m-auto flex flex-col gap-3">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.2,
          type: "spring",
        }}
        className="text-3xl m-auto mt-3 font-bold"
      >
        Subs
      </motion.h1>
      <h4 className="text-xl font-semibold border-2 rounded-md w-fit m-auto px-2 border-blue-500">
        New subs: {newSubsNumber}
      </h4>
      <List subs={subs} onClose={onClose} handleOrder={handleOrder} />
    </div>
  );
};

export default Subs;
