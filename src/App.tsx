import { useState, useEffect, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";
import { getAllSubs } from "./services/getAllSubs";
import { motion } from "framer-motion";

interface AppState {
  subs: Array<Sub>; // o Sub[]
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  useEffect(() => {
    setNewSubsNumber(subs.length);
  }, [subs.length]);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  const onClose = (nick: string) => {
    setSubs((subs) => subs.filter((sub) => sub.nick !== nick));
    setNewSubsNumber((n) => n - 1);
  };

  const handleOrder = (order: AppState["subs"]) => {
    setSubs(order);
  };

  return (
    <div className="App flex flex-col gap-3" ref={divRef}>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.2,
          type: "spring",
        }}
        className="text-3xl mt-3 font-bold"
      >
        Subs
      </motion.h1>
      <h4 className="text-xl font-semibold border-2 rounded-md w-fit m-auto px-2 border-blue-500">
        New subs: {newSubsNumber}
      </h4>
      <Form onNewSub={handleNewSub} />
      <List subs={subs} onClose={onClose} handleOrder={handleOrder} />
    </div>
  );
}

export default App;
