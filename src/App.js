import "./styles.css";
import "echarts-for-react";
import { useState, useCallback, useMemo } from "react";

export default function App() {
  const [val, setVal] = useState();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen</h2>
    </div>
  );
}
