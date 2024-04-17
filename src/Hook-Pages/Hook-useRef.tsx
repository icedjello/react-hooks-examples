import BackToLandingPage from "../BackToLanding";
import { useCallback, useEffect, useRef, useState } from "react";

export default function HookUseRef() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerId = useRef<number | null>();

  const startTimer = () => {
    if (timerId.current) return;
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (!timerId.current) return;
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds > 0) {
      setSeconds(0);
    }
  };

  // Run at every render and increment the renders.
  // Because useRef does not trigger a re-render, the first increment will 2
  // in released products, or 3 in development.
  useEffect(() => {
    renders.current++;
  });

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setRandomInput(target.value);
      renders.current++;
    },
    []
  );

  // Grabs the input and focuses on it when you click the button.
  // Essentially, using the inputRef as a handle to do stuff with.
  // const focusOnInput = () => {
  //   inputRef.current?.focus();
  // };

  return (
    <>
      <h2>useRef</h2>
      <h3>Input</h3>
      <input
        ref={inputRef}
        type="text"
        value={randomInput}
        onChange={handleChange}
      />
      {/* <button onClick={focusOnInput}>Focus on input</button> */}
      <p>Input value: {randomInput}</p>
      <br />
      <h3>Timer</h3>
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <p>Seconds: {seconds}</p>
      <br />
      <p>Renders: {renders.current}</p>
      <BackToLandingPage />
    </>
  );
}
