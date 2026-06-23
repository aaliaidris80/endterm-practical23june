import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    let number = parseInt(num);
    let n = number;
    let sum = 0;

    let digits = number.toString().length;

    while (number > 0) {
      let digit = number % 10;
      sum += digit ** digits;
      number = Math.floor(number / 10);
    }

    if (sum === n) {
       
    } else {
      setResult(`${n} is not an Armstrong Number`);
    }
  };

  return (
    <div>
      <h2>Armstrong Number Checker</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={checkArmstrong}>
        Check
      </button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;