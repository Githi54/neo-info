import { useEffect, useState } from "react";
import { getNeoInfo } from "../../data/data-about-neo";
import { NearEarthObjects, NeowInfo } from "../../types/neows-info";
import { NeowsList } from "../../components/neows-list";
import { NeoModal } from "../../components/neo-modal";

export const HomePage = () => {
  const [neows, setNeows] = useState<NearEarthObjects | null>(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDayInfo, setSelectedDayInfo] = useState<NeowInfo[] | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    getNeoInfo("2023-07-01")
      .then((data) => {
        if (data) {
          setNeows(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (neows && selectedDay in neows) {
      const selectedDayInfo: NeowInfo[] =
        neows[selectedDay as keyof NearEarthObjects];

      setSelectedDayInfo(selectedDayInfo);
    }
  }, [neows, selectedDay]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Near Orbital Objects (NEO)</h1>

            <div className="block">
              {neows !== null ? (
                <NeowsList
                  neows={neows}
                  setSelectedDay={setSelectedDay}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                  selectedDate={selectedDay}
                />
              ) : (
                <p>Loading</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedDayInfo && (
        <NeoModal
          selectedDayInfo={selectedDayInfo}
          setSelectdayInfo={setSelectedDayInfo}
          setIsVisible={setIsVisible}
          selectedDay={selectedDay}
        />
      )}
    </>
  );
};
