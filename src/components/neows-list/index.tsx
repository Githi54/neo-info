import { useEffect, useState } from "react";
import { NearEarthObjects } from "../../types/neows-info";
import { NeoItem } from "../neo-item";

interface Props {
  neows: NearEarthObjects;
}

export const NeowsList: React.FC<Props> = ({ neows }) => {
  const [sliceSegment, setSliceSegment] = useState<number[]>([0, 6]);
  const datesArray = Object.keys(neows).sort();
  const [dates, setDates] = useState<string[]>(
    datesArray.slice(sliceSegment[0], sliceSegment[1])
  );

  useEffect(() => {
    const getDates = () => {
      if (sliceSegment[1] === datesArray.length) {
        setSliceSegment([0, 6]);
      } else {
        setSliceSegment([sliceSegment[0] + 1, sliceSegment[1] + 1]);
      }
      setDates(datesArray.slice(sliceSegment[0], sliceSegment[1]));
    };

    const timeoutId = setInterval(getDates, 5000);
    return () => clearTimeout(timeoutId);
  }, [datesArray, sliceSegment]);

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
          <NeoItem key={date} date={date} index={index} />
        ))}
      </tbody>
    </table>
  );
};
