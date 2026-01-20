import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(1);

  function handleDecreaseStep() {
    step > 1 && setStep((s) => s - 1);
  }

  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }

  function handleDecreaseCounter() {
    setCounter((c) => c - step);
  }

  function handleIncreaseCounter() {
    setCounter((c) => c + step);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <button onClick={handleDecreaseStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleIncreaseStep}>+</button>
      </div>

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <button onClick={handleDecreaseCounter}>-</button>
        <p>Counter: {counter}</p>
        <button onClick={handleIncreaseCounter}>+</button>
      </div>

      <Message count={counter} />
    </div>
  );
}

function Message({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);

  return <p>{`${count} days from today is ${date.toLocaleDateString()}`}</p>;
}
