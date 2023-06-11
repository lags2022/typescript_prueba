import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";
import { motion } from "framer-motion";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    dispatch({
      type: "clear",
    });
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div className="w-[300px] m-auto my-10 ">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.2,
          type: "spring",
        }}
        className="text-center my-4 text-2xl font-bold"
      >
        Add Sub
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center  [&>button]:border-2 [&>button]:border-blue-500 [&>button]:rounded-md [&>button]:bg-blue-200 [&>button:hover]:bg-blue-800 [&>button:hover]:text-white [&>button]:my-1 [&>button]:w-fit [&>button]:px-2 [&>input]:w-full"
      >
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <textarea
          className="border-2 border-gray-300 rounded-sm w-full"
          value={inputValues.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button type="submit">Save new Sub!</button>
        <button type="button" onClick={handleClear}>
          Clear the form
        </button>
      </form>
    </div>
  );
};

export default Form;
