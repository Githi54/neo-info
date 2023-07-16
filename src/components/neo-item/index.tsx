import classNames from "classnames";
import { useCallback } from "react";

interface Props {
  date: string;
  index: number;
  setSelectedDay: (day: string) => void;
  isVisible: boolean;
  setIsVisible: (param: boolean) => void;
  selectedDate: string;
  dangerDates: string[];
}

export const NeoItem: React.FC<Props> = ({
  date,
  index,
  setSelectedDay,
  isVisible,
  setIsVisible,
  selectedDate,
  dangerDates,
}) => {
  const handleClick = useCallback(() => {
    setIsVisible(!isVisible);
    setSelectedDay(date);
  }, [setIsVisible, isVisible, setSelectedDay, date]);

  return (
    <tr className={classNames({"has-background-danger-light": dangerDates.includes(date)})}>
      <td className={classNames("is-vcentered", {"has-text-danger": dangerDates.includes(date)})}>{index + 1}</td>
      <td className="is-vcentered is-expanded">
        <p className={classNames({"has-text-danger": dangerDates.includes(date)})}>{date}</p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => handleClick()}
        >
          <span className={classNames("material-symbols-outlined", {"has-text-danger": dangerDates.includes(date)})}>
            {isVisible && selectedDate === date
              ? "visibility_off"
              : "visibility"}
          </span>
        </button>
      </td>
    </tr>
  );
};
