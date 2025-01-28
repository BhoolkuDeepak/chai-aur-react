import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "usd") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  //fetching api of currencies
  //converting majority time api returns string data to json
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;
