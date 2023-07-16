import { useCallback } from "react";
import { NeowInfo } from "../../types/neows-info";

interface Props {
  selectedDayInfo: NeowInfo[];
  setSelectdayInfo: (param: NeowInfo[] | null) => void;
  setIsVisible: (arg: boolean) => void;
  selectedDay: string;
}

export const NeoModal: React.FC<Props> = ({
  selectedDayInfo,
  setSelectdayInfo,
  setIsVisible,
  selectedDay,
}) => {
  const handleClose = useCallback(() => {
    setSelectdayInfo(null);
    setIsVisible(false);
  }, [setIsVisible, setSelectdayInfo]);

  const getMaxEstimatedDiameter = useCallback(
    () =>
      selectedDayInfo
        ?.map(
          (nearObj) =>
            nearObj.estimated_diameter.kilometers.estimated_diameter_max
        )
        .sort((d1, d2) => d2 - d1)[0],
    [selectedDayInfo]
  );

  const getNumberPotentiallyHazardous = useCallback(
    () =>
      selectedDayInfo
        ?.map((nearObj) => nearObj.is_potentially_hazardous_asteroid)
        .filter((isPotential) => isPotential).length,
    [selectedDayInfo]
  );

  const getClosestNeo = useCallback(() => selectedDayInfo.map(nearObj => nearObj.close_approach_data[0].miss_distance.kilometers).sort((distance1, distance2) => Number(distance1) - Number(distance2))[0], [selectedDayInfo])
  const getFastestNeo = useCallback(() => selectedDayInfo.map(nearObj => nearObj.close_approach_data[0].relative_velocity.kilometers_per_hour).sort((velocity1, velocity2) => Number(velocity2) - Number(velocity1))[0], [selectedDayInfo])

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{`Information about NEO by ${selectedDay}`}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={handleClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <p className="block">{`Max estimated diameter of NEO in kilometers: ${getMaxEstimatedDiameter()}`}</p>
          <p className="block">{`Number of potentially hazardous NEOs: ${getNumberPotentiallyHazardous()}`}</p>
          <p className="block">{`Closest NEO: ${getClosestNeo()} km`}</p>
          <p className="block">{`Fastest NEO: ${getFastestNeo()} kph`}</p>
        </section>
      </div>
    </div>
  );
};
