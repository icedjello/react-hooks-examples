import { useEffect, useReducer } from "react";
import BackToLandingPage from "../BackToLanding";

type State = {
  color: boolean;
  count: number;
  userInput: string;
};

type Action =
  | { type: "increment" | "decrement" | "color" }
  | { type: "userInput"; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "color":
      return { ...state, color: !state.color };
    case "userInput":
      return { ...state, userInput: action.payload };
    default:
      throw new Error();
  }
};

export default function HookUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: "",
  });

  useEffect(() => {
    console.log("render");
  });

  return (
    <div style={{ color: state.color ? "red" : undefined }}>
      <h2>useReducer</h2>
      <input
        type="text"
        value={state.userInput}
        onChange={({ target }) =>
          dispatch({ type: "userInput", payload: target.value })
        }
      />
      <p>User Input: {state.userInput}</p>
      <br />
      <h3>{state.count}</h3>
      <section>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "color" })}>Colour</button>
      </section>
      <br />
      <h3>State: </h3>
      <pre>{JSON.stringify(state)}</pre>
      <BackToLandingPage />
    </div>
  );
}
