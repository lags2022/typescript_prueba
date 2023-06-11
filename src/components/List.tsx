import { Sub } from "../types";
import { Reorder, motion, AnimatePresence } from "framer-motion";

interface Props {
  subs: Array<Sub>;
  onClose: (nick: string) => void;
  handleOrder: (order: Array<Sub>) => void;
}

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }: any) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

const List = ({ subs, onClose, handleOrder }: Props) => {
  const renderList = () => {
    return subs.map((sub, index) => {
      return (
        <Reorder.Item key={sub.nick} value={sub}>
          <motion.div
            custom={{ delay: (index + 1) * 0.1 }}
            initial="hidden"
            animate="visible"
            variants={variants}
            exit="hidden"
            layoutId={sub.nick}
            key={sub.nick}
            className="relative flex gap-x-3 justify-center items-center px-4 bg-slate-300 border-blue-600 "
          >
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <div className="">
              <h4 className="font-medium">
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p className="font-light">{sub.description?.substring(0, 100)}</p>
            </div>
            <motion.button
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 1 }}
              onClick={() => onClose(sub.nick)}
              className="absolute right-0 top-0 -my-1 mx-1 p-0 text-red-600 font-medium"
            >
              x
            </motion.button>
          </motion.div>
        </Reorder.Item>
      );
    });
  };

  return (
    <Reorder.Group
      axis="x"
      values={subs}
      onReorder={(order) => handleOrder(order)}
      layout
      className="flex flex-col gap-4 m-4 border-2 rounded-lg p-2 border-black bg-slate-100 justify-center"
    >
      {renderList()}
    </Reorder.Group>
  );
};

export default List;
