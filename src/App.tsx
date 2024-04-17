import { BrowserRouter, Routes, Route } from "react-router-dom";
import HookUseCallback from "./Hook-Pages/Hook-useCallback";
import LandingPage from "./LandingPage";
import HookUseMemo from "./Hook-Pages/Hook-useMemo";
import HookUseRef from "./Hook-Pages/Hook-useRef";
import HookUseReducer from "./Hook-Pages/Hook-useReducer";
import HookUseLayoutEffect from "./Hook-Pages/Hook-useLayoutEffect";
import HookUseImperativeHandle from "./Hook-Pages/Hook-useImperativeHandle";

export default function App() {
  return (
    <main className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/useCallback" element={<HookUseCallback />} />
          <Route path="/useMemo" element={<HookUseMemo />} />
          <Route path="/useRef" element={<HookUseRef />} />
          <Route path="/useReducer" element={<HookUseReducer />} />
          <Route path="/useLayoutEffect" element={<HookUseLayoutEffect />} />
          <Route
            path="/useImperativeHandle"
            element={<HookUseImperativeHandle />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
