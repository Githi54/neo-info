import { useEffect, useState } from "react";
import { getNeoInfo } from "../../data/data-about-neo";
import { NearEarthObjects } from "../../types/neows-info";

export const HomePage = () => {
  const [neows, setNeows] = useState<NearEarthObjects | null>(null);

  useEffect(() => {
    getNeoInfo("2023-07-01")
      .then((data) => {
        if (data) {
          setNeows(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(neows?.["2023-07-01"][0].id);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Near Orbital Objects (NEO)</h1>

            <div className="block">
              {neows !== null && <h1>{neows["2023-07-01"][0].id}</h1>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
    </>
  );
};
