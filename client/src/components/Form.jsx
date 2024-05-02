import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({ name: "", date: "", content: "" });

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
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Share your</h3>
      <select>
        <option value="dream">Dream</option>
        <option value="nightmare">Nightmare</option>
      </select>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input type="date" name="date" onChange={handleChange} />
      <input
        type="text"
        name="content"
        placeholder="share your dream"
        onChange={handleChange}
      />
      <select>
        <option value="normal">Normal</option>
        <option value="lucid">Lucid</option>
        <option value="recurring">Recurring</option>
        <option value="false-awakening">False Awakening</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
