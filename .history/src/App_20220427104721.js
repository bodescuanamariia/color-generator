import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            vaue={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
        </form>
      </section>
      <section className="colors">
        <h4> List is here</h4>
      </section>
    </>
  );
}

export default App;
