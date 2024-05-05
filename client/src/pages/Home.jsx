// import { useState } from "react";
import Form from "../components/Form";
import "../App.css";
import Header from "../components/Header";

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState("dream");
  // const backgroundImage =
  //   selectedOption === "nightmare"
  //     ? "url(https://images.unsplash.com/photo-1500740516770-92bd004b996e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
  //     : "";

  return (
    <div
      className="background-img"
      // style={{ backgroundImage: backgroundImage }}
    >
      <Header />
      <Form
      // selectedOption={selectedOption}
      // setSelectedOption={setSelectedOption}
      />
    </div>
  );
}
