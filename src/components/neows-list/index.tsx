import { useEffect, useState } from "react";
import { NearEarthObjects } from "../../types/neows-info";
import { NeoItem } from "../neo-item";

interface Props {
  neows: NearEarthObjects;
  setSelectedDay: (date: string) => void;
  isVisible: boolean;
  setIsVisible: (param: boolean) => void;
  selectedDate: string;
}

export const NeowsList: React.FC<Props> = ({
  neows,
  setSelectedDay,
  isVisible,
  setIsVisible,
  selectedDate,
}) => {
  const [sliceSegment, setSliceSegment] = useState<number[]>([0, 6]);
  const datesArray = Object.keys(neows).sort();
  const [dangerDates, setDangerDates] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([
    ...dangerDates,
    ...datesArray
      .filter((date) => !dangerDates.includes(date))
      .slice(sliceSegment[0], sliceSegment[1] - dangerDates.length),
  ]);

  useEffect(() => {
    for (const date in neows) {
      const numberOfPotentialHazardous = neows[
        date as keyof NearEarthObjects
      ].filter((neowInfo) => neowInfo.is_potentially_hazardous_asteroid).length;

      if (numberOfPotentialHazardous >= 2 && !dangerDates.includes(date)) {
        setDangerDates([...dangerDates, date]);
      }
    }
  }, [dangerDates, neows]);

  useEffect(() => {
    const getDates = () => {
      if (sliceSegment[1] === datesArray.length) {
        setSliceSegment([0, 6]);
      } else {
        setSliceSegment([sliceSegment[0] + 1, sliceSegment[1] + 1]);
      }
      setDates([
        ...dangerDates,
        ...datesArray
          .filter((date) => !dangerDates.includes(date))
          .slice(sliceSegment[0], sliceSegment[1] - dangerDates.length),
      ]);
    };

    const timeoutId = setInterval(getDates, 5000);
    return () => clearTimeout(timeoutId);
  }, [dangerDates, datesArray, sliceSegment]);

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {dates.map((date, index) => (
          <NeoItem
            key={date}
            date={date}
            index={index}
            setSelectedDay={setSelectedDay}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            selectedDate={selectedDate}
            dangerDates={dangerDates}
          />
        ))}
      </tbody>
    </table>
  );
};
