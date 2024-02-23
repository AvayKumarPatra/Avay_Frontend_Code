import { useEffect, useState } from "react";

export default function useCurrencyHook(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log("fetch data are:", data);
  }, [currency]);

  return data;
}
