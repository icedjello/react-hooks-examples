import { useLayoutEffect, useRef, useState } from "react";
import BackToLandingPage from "../BackToLanding";

/* 
    useLayoutEffect is similar to useEffect. 
    The main difference is when each runs the code inside it. 
    useEffect is asynchronous, it will not delay painting the DOM.
    useLayoutEffect is synchronous, it will delay painting DOM.
    The code inside useLayoutEffect will run before the DOM changes.  
*/

export default function HookUseLayoutEffect() {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setsectionStyle] = useState<{
    paddingTop: string | undefined;
  }>({ paddingTop: undefined });
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    setsectionStyle({ paddingTop: `${random}px` });
  }, [number]);

  return (
    <>
      <h2>useLayoutEffect</h2>
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
        <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
      </section>
      <BackToLandingPage />
    </>
  );
}
