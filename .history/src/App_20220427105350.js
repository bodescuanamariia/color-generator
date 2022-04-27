import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
    } catch {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            vaue={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4> List is here</h4>
      </section>
    </>
  );
}

export default App;
