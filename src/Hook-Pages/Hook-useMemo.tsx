import { useState, useEffect, useMemo, useCallback } from "react";
import BackToLandingPage from "../BackToLanding";

export default function HookUseMemo() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n: number): number => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  useEffect(() => {
    console.log("new Number");
  }, [fibNumber]);

  return (
    <>
      <h2>useMemo</h2>
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber === 0 ? "" : userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(Number(e.target.value))}
      />
      <p>Number: {fibNumber || "--"}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>

      <BackToLandingPage />
    </>
  );
}
