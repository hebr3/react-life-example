import React, { useEffect, useState } from "react";

import "./App.css";

function range(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = 0;
  }
  return arr;
}

export default function App() {
  const [game, setGame] = useState(range(900));

  useEffect(() => {}, [game]);

  function updateKey(n) {
    let tmp = [...game];
    if (tmp[n] === 0) {
      tmp[n] = 1;
    } else {
      tmp[n] = 0;
    }
    setGame(tmp);
  }

  return (
    <div>
      Conways Life Example
      <div className="App">
        {game.map((val, idx) => (
          <div
            key={idx}
            className={val === 1 ? "red" : ""}
            onMouseEnter={() => updateKey(idx)}
          />
        ))}
      </div>
    </div>
  );
}
