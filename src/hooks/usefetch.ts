import axios from "axios";
import { useState, useEffect } from "react";
import Display from "@types";
const useFetch = (url: string) => {
  const [data, setData] = useState<Display>({
    name: "",
    abilities: [],
    moves: [],
    image: "",
    base_experience: 0,
    height: 0,
    weight: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await axios.get(url);
      if (data) {
        console.log(data)
        setLoading(false);
        const display: Display = {
          name: data.name,
          abilities: data?.abilities,
          moves: data?.moves,
          image: data?.sprites?.other?.dream_world?.front_default
            ? data?.sprites?.other?.dream_world?.front_default
            : data?.sprites?.front_default,
          base_experience: data.base_experience,
          height: data.height,
          weight: data.weight,
        };
        setData(display);
      }
    })();
  }, [url]);
  return [data, loading] as const;
};

export default useFetch;
