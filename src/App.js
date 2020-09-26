import React from "react";
import "./styles.css";
import BelajarUseCallback from "./useCallback";

export default function App() {
  const [kelas, setKelas] = React.useState();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setKelas("XII RPL")}>KLIK</button>
      <div>
        <BelajarUseCallback kelas={kelas} />
      </div>
    </div>
  );
}
