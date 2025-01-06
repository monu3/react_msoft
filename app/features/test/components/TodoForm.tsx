import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../formSlice";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTodo = {
      id: Date.now(), // Unique ID for the new todo
      title,
    };

    dispatch(addTodo(newTodo));
    setTitle(""); // Reset the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        className="border p-2 rounded flex-grow"
      />
      <button type="submit" className="bg-primary text-bg py-2 px-4 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
