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

      {/* <tbody>
          {todos.map((todo) => (
            <tr
              data-cy="todo"
              className={classNames(
                { 'has-background-info-light': selectedTodo?.id === todo.id },
              )}
              key={todo.id}
            >
              <td className="is-vcentered">{todo.id}</td>
              <td className="is-vcentered">
                {todo.completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p className={classNames(
                  { 'has-text-success': todo.completed },
                  { 'has-text-danger': !todo.completed },
                )}
                >
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => callbackTodo(todo)}
                >
                  <span className="icon">
                    <i className={classNames(
                      'far',
                      { 'fa-eye': todo !== selectedTodo },
                      { 'fa-eye-slash': todo === selectedTodo },
                    )}
                    />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
    </table>
  );
};
