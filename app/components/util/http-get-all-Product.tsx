import { useState, useEffect } from "react";
import { useHttp } from "./http-hook";
export function useEffectProduct() {
  const { sendRequest } = useHttp();
  const [getData, setGetData] = useState([]);

  try {
    useEffect(() => {
      const fetch = async () => {
        const hasil = await sendRequest(`http://localhost:3001/cake`);

        await setGetData(hasil || []);
        return hasil;
      };
      fetch();
    }, [sendRequest]);
  } catch (err: any) {
    throw err.message;
  }
  return {
    getData,
  };
}
