import React from "react";
import useCurrencyInfo from "./useCurrencyInfo";
function CurrencyRates({ baseCurrency }) {
  const { data, error } = useCurrencyInfo(baseCurrency);
//handling errors using basic java
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Currency Rates (Base: {baseCurrency.toUpperCase()})</h3>
      <ul>
        {Object.entries(data[baseCurrency]).map(([key, value]) => (
          <li key={key}>
            {key.toUpperCase()}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrencyRates;
