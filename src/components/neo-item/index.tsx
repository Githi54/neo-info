import { useState, useCallback } from "react";

interface Props {
  date: string;
  index: number;
}

export const NeoItem: React.FC<Props> = ({ date, index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = useCallback(() => setIsVisible(!isVisible), [isVisible]);

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
            {isVisible ? "visibility" : "visibility_off"}
          </span>
        </button>
      </td>
    </tr>
  );
};
