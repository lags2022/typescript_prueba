import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Subs from "./components/Subs";
import Form from "./components/Form";
import { getAllSubs } from "./services/getAllSubs";
import { Sub } from "./types";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";

interface AppState {
  subs: Array<Sub>; // o Sub[]
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setNewSubsNumber(subs.length);
  }, [subs.length]);

  const onClose = (nick: string) => {
    setSubs((subs) => subs.filter((sub) => sub.nick !== nick));
    setNewSubsNumber((n) => n - 1);
  };

  const handleOrder = (order: AppState["subs"]) => {
    setSubs(order);
  };

  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="flex w-screen items-center justify-between">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Subs
              subs={subs}
              newSubsNumber={newSubsNumber}
              onClose={onClose}
              handleOrder={handleOrder}
            />
          }
        />
        <Route path="/form" element={<Form onNewSub={handleNewSub} />} />
      </Routes>
    </div>
  );
}

export default App;
