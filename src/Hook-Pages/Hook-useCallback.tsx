import { useState, useEffect, useCallback } from "react";
import BackToLandingPage from "../BackToLanding";

export default function HookUseCallback() {
  const [userInput, setUserInput] = useState("");
  const [sumResult, setSumResult] = useState(0);
  const [arrayResult, setArrayResult] = useState<number[]>([]);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
    setSumResult(sum());
    console.log(`New array. Value: ${buildArray()}`);
    setArrayResult(buildArray());
  }, [sum, buildArray]);
  return (
    <>
      <h2>useCallback</h2>
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={({ target }) => setUserInput(target.value)}
      />
      <h2>Output: {userInput || "--"}</h2>
      <p>Sum Result: {sumResult}</p>
      <p>Array Result: {arrayResult}</p>
      <BackToLandingPage />
    </>
  );
}
