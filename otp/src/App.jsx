import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import "./styles.css";

export default function App() {
  const otpLength = 6;
  const [array, setArray] = useState(Array(otpLength).fill(""));
  const inputRef = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newArray = [...array];
    newArray[index] = value.trim().slice(-1);
    setArray(newArray);
    value && inputRef.current[index + 1]?.focus();
  };

  const handleKey = (e, index) => {
    if (!array[index] && e.key === "Backspace") {
      if (array[index]) {
        const newArray = [...array];
        newArray[index] = "";
        setArray(newArray);
      } else {
        inputRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedOtp = e.clipboardData?.getData("text");
    if (isNaN(pastedOtp)) return;
    const newArray = [...pastedOtp];
    console.log(newArray);
    setArray(newArray);
  };

  return (
    <div className="App">
      <h1>OTP</h1>
      {array.map((digit, index) => (
        <input
          className="otp-inputs"
          key={index}
          type="text"
          maxLength={1}
          onPaste={handlePaste}
          value={digit}
          ref={(node) => (inputRef.current[index] = node)}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKey(e, index)}
        />
      ))}
      <p>{array}</p>
    </div>
  );
}
