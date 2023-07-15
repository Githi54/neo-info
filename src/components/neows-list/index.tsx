import { NearEarthObjects } from "../../types/neows-info";

interface Props {
  neows: NearEarthObjects[];
}

export const NeowsList: React.FC<Props> = ({ neows }) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Date</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {neows.length > 0 && neows.map((neow, i) => (
          <tr key={i}>
            <td className="is-vcentered">{neow["2023-07-01"].id}</td>
          </tr>
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
