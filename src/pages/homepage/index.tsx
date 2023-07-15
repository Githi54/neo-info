import { useEffect, useState } from "react";
import { getNeoInfo } from "../../data/data-about-neo";
import { NearEarthObjects } from "../../types/neows-info";
import { NeowsList } from "../../components/neows-list";

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

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Near Orbital Objects (NEO)</h1>

            <div className="block">
              {neows !== null ? <NeowsList neows={neows} /> : <p>Loading</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
    </>
  );
};
