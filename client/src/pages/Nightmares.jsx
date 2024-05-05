import { useState, useEffect } from "react";
import "../Post.css";
import Header from "../components/Header";
import Subheading from "../components/Subheading";

export default function Nightmares() {
  const [nightmares, setNightmares] = useState([]);

  useEffect(() => {
    getNightmares();
  }, []);

  //date format
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  }

  async function getNightmares() {
    const response = await fetch("http://localhost:8080/nightmares");
    const data = await response.json();
    setNightmares(data);
  }
  return (
    <div>
      <Header />
      <Subheading />
      <div className="posts-container">
        {nightmares.map((nightmare) => {
          return (
            <div className="post" key={nightmare.id}>
              <p>{nightmare.content}</p>
              <p>
                {nightmare.element} | {nightmare.type} | {nightmare.theme}
              </p>
              <h3>
                {nightmare.name} | {formatDate(nightmare.date)}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
