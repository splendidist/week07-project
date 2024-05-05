import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    content: "",
    type: "dream",
    theme: "normal",
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/dreams", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log({ ...form, [event.target.name]: event.target.value });
  }

  //change background
  // function handleSelectChange(event) {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  //   setSelectedOption(event.target.value);
  // }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-one">
          <h3 className="share">Share your</h3>
          <select name="type" onChange={handleChange}>
            <option value="dream">Dream</option>
            <option value="nightmare">Nightmare</option>
          </select>
        </div>
        <div className="form-two">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input type="date" name="date" onChange={handleChange} />
          <textarea
            className="dream-input"
            type="text"
            name="content"
            placeholder="Share your dream"
            onChange={handleChange}
          />
          <select name="theme" onChange={handleChange}>
            <option value="normal">Normal</option>
            <option value="lucid">Lucid</option>
            <option value="recurring">Recurring</option>
            <option value="false-awakening">False Awakening</option>
          </select>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
