import { useState } from "react";
import Greeting from "./Greeting";
import Greetings from "./Greetings";
import Counter from "./Counter";

import CurrencyRates from "./CurrencyRates";

import ParentComponent from "./components/ParentComponent";
import RouterApp from "./RouterApp";
// Define a functional component in React named Greeting that returns an <h1> tag with the text "Hello, World!".
// 	Give one example for each-> functional component and a class component.

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>React Router & Link</h1>
    {/* Routing app */}
    <RouterApp/>
    <br />
      <h1>Functional And Class Component</h1>
      {/* Displaying functional Component */}
      <Greeting />
      {/* Displaying Class Component */}

      <Greetings />
      <h1>Communication between Chilkd and Parent</h1>
      <ParentComponent />
      <h1>UseState Counter</h1>
      <Counter />

      <div>
        <h1>UseEffect & Error Handling</h1>
        <CurrencyRates baseCurrency="usd" />
      </div>
    </>
  );
}

export default App;
