import { useState, useEffect } from "react";
import { useHttp } from "./http-hook";

enum Category {
  KUE_KERING = "KUE_KERING",
  KUE_BASAH = "KUE_BASAH",
}

export interface Datakue {
  data?: string;
  setData?: React.Dispatch<React.SetStateAction<string | undefined>>;

  id?: number;
  quantity?: number;
  nameCake: string;
  price?: number;
  image: string;
  description?: string;
  category?: Category;
  create_at?: string;
}

export function useEffectProduct() {
  const { sendRequest, pesanVerify } = useHttp();
  const [getData, setGetData] = useState<Datakue[]>([]);
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
    pesanVerify,
  };
}
