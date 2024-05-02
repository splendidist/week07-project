import { useState, useEffect } from "react";
import Form from "./components/Form";

export default function App() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    getDreams();
  }, []);
  async function getDreams() {
    const response = await fetch("http://localhost:8080/dreams");
    const data = await response.json();
    setDreams(data);
  }
  return (
    <div>
      <h1>Dreamscape</h1>
      <Form />
      {dreams.map((dream) => {
        return (
          <div key={dream.id}>
            <p>{dream.content}</p>
            <p>
              {dream.element} | {dream.type} | {dream.theme}
            </p>
            <h3>
              {dream.name} | {dream.date}
            </h3>
          </div>
        );
      })}
      <form></form>
    </div>
  );
}
