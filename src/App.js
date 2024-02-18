import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        setGenerateExcuse(res.data[0].excuse);
      });
  };
  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuse("party")}>party</button>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <p>{generateExcuse}</p>
    </div>
  );
}

export default App;
