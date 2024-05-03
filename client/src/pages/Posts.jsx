import { useState, useEffect } from "react";
import "../Post.css";
import Header from "../components/Header";

export default function Posts() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    getDreams();
  }, []);
  async function getDreams() {
    const response = await fetch("http://localhost:8080/dreams");
    const data = await response.json();
    setDreams(data);
  }

  //date format
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  }

  return (
    <div>
      <Header />
      <p className="posts-intro">
        Whether youre seeking inspiration, solace, or simply a window into the
        human psyche, Dreamers Chronicles invites you to embark on a journey of
        exploration and discovery. Dive deep into the collective unconscious and
        witness the power of dreams to illuminate the human experience.
      </p>
      <div className="posts-container">
        {dreams.map((dream) => {
          return (
            <div className="post" key={dream.id}>
              <p>{dream.content}</p>
              <p>
                {dream.element} | {dream.type} | {dream.theme}
              </p>
              <h3>
                {dream.name} | {formatDate(dream.date)}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
