import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Thomas",
    age: 35,
    address: {
      street: "1234",
      city: "NY",
    },
  };

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="thomas" myArr={newArr} />
      <Card username="Json" post="Staff Engg." />
      <Card />
    </>
  );
}

export default App;
