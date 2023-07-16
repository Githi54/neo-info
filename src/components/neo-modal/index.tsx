import { useCallback } from "react";
import { NeowInfo } from "../../types/neows-info";

interface Props {
  selectedDayInfo: NeowInfo[] | null;
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
        <section className="modal-card-body"></section>
      </div>
    </div>
  );
};
