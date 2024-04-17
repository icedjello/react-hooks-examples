import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Link to="/useCallback">useCallback</Link>
      <Link to="/useMemo">useMemo</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/useReducer">useReducer</Link>
      <Link to="/useLayoutEffect">useLayoutEffect</Link>
      <Link to="/useImperativeHandle">useImperativeHandle</Link>
      <Link to="/useImperativeHandle">useImperativeHandle</Link>
    </>
  );
}
