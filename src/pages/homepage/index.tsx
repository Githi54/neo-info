import "bulma/css/bulma.css";
import { useCallback, useEffect, useState } from "react";
import { getNeoInfo } from "../../data/data-about-neo";
import { NearEarthObjects } from "../../types/neows-info";

export const HomePage = () => {
  const [neows, setNeows] = useState<NearEarthObjects[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const res = await getNeoInfo("2023-07-01");

      if (res) {
        setNeows(res);
      }
    } catch (error) {
      console.log(error);
      setNeows([]);
    }
  }, []);

  if (neows.length === 0) {
    void fetchData();
  }

  useEffect(() => {
    console.log(neows);
  }, [neows]);

  return <h1>Hello world!</h1>;
};
