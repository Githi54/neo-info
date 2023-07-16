import { useCallback } from "react";

interface Props {
  date: string;
  index: number;
  setSelectedDay: (day: string) => void;
  isVisible: boolean;
  setIsVisible: (param: boolean) => void;
  selectedDate: string;
}

export const NeoItem: React.FC<Props> = ({
  date,
  index,
  setSelectedDay,
  isVisible,
  setIsVisible,
  selectedDate,
}) => {
  const handleClick = useCallback(() => {
    setIsVisible(!isVisible);
    setSelectedDay(date);
  }, [setIsVisible, isVisible, setSelectedDay, date]);

  return (
    <tr>
      <td className="is-vcentered">{index + 1}</td>
      <td className="is-vcentered is-expanded">
        <p>{date}</p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => handleClick()}
        >
          <span className="material-symbols-outlined">
            {isVisible && selectedDate === date
              ? "visibility_off"
              : "visibility"}
          </span>
        </button>
      </td>
    </tr>
  );
};
