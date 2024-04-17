import {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  Dispatch,
} from "react";
import BackToLandingPage from "../BackToLanding";

const Modal = forwardRef(
  ({ setInputValue }: { setInputValue: Dispatch<string> }, ref) => {
    // not using props here which is why it's called _props
    const [visible, setVisible] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      openModal: () => setVisible(true),
    }));

    // console.log("child rendered");

    if (!visible) return null;

    const handleClose = () => {
      setVisible(false);
      if (inputRef.current && inputRef.current.value !== "")
        setInputValue(inputRef.current?.value);
    };

    return (
      <div className="modal">
        <p>This is my modal</p>
        <button onClick={handleClose}>Close</button>
        <input ref={inputRef} type="text" />
      </div>
    );
  }
);

export default function HookUseImperativeHandle() {
  // Important to remember here, we are coupling this ref with the imperative-handle of Modal.
  // this means we don't need to express the component in generic, just the callable functions.
  const modalRef = useRef<{ openModal: () => void }>(null);

  const [InputValueFromModal, setInputValueFromModal] = useState("");

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };
  console.log("parent rendered");
  return (
    <>
      <h2>useImperativeHandle</h2>
      <h3>Parent Component</h3>
      <p>input value from modal: {InputValueFromModal}</p>
      <br />
      <Modal ref={modalRef} setInputValue={setInputValueFromModal} />
      <button onClick={handleOpenModal}>Open</button>
      <BackToLandingPage />
    </>
  );
}
