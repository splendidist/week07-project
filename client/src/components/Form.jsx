import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    content: "",
    type: "dream",
    theme: "normal",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/dreams", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    event.target.reset();
    setFormSubmitted(true);
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
            required
          />
          <input type="date" name="date" onChange={handleChange} required />
          <textarea
            className="dream-input"
            type="text"
            name="content"
            placeholder="Share your dream"
            onChange={handleChange}
            required
          />
          <div className="element-input">
            <input type="checkbox" id="none" name="element" value="none" />
            <label htmlFor="none"> None</label>
            <input type="checkbox" id="spider" name="element" value="spider" />
            <label htmlFor="spider"> Spider</label>
            <input type="checkbox" id="snake" name="element" value="snake" />
            <label htmlFor="snake"> Snake</label>
            <input
              type="checkbox"
              id="falling"
              name="element"
              value="falling"
            />
            <label htmlFor="falling"> Falling</label>
            <input type="checkbox" id="flying" name="element" value="flying" />
            <label htmlFor="flying"> Flying</label>
            <input type="checkbox" id="teeth" name="element" value="teeth" />
            <label htmlFor="teeth"> Teeth</label>
            <input type="checkbox" id="mirror" name="element" value="mirror" />
            <label htmlFor="mirror"> Mirror</label>
            <input
              type="checkbox"
              id="paranoia"
              name="element"
              value="paranoia"
            />
            <label htmlFor="paranoia"> Paranoia</label>
            <input
              type="checkbox"
              id="high-school"
              name="element"
              value="high-school"
            />
            <label htmlFor="high-school"> High school</label>
            <input
              type="checkbox"
              id="running-away"
              name="element"
              value="running-away"
            />
            <label htmlFor="running-away"> Running away</label>
          </div>
          <select name="theme" onChange={handleChange}>
            <option value="normal">Normal</option>
            <option value="lucid">Lucid</option>
            <option value="recurring">Recurring</option>
            <option value="false-awakening">False Awakening</option>
          </select>
          <button>Submit</button>
        </div>
        {formSubmitted && <p className="submit-message">Submitted!</p>}
      </form>
    </div>
  );
}
