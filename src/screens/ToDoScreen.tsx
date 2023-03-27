import { useState } from "react";
import { ToDo } from "../interfaces/toDo";
import { useGetToDoByIdQuery, useGetTodosQuery } from "../redux/services/todo/toDoApi";

export const ToDoScreen = () => {
  const [toDoId, setToDoId] = useState(1);
  const { data: toDos = [], isLoading: areLoadingToDos } = useGetTodosQuery();
  const { data: toDo, isLoading: isLoadingToDo } = useGetToDoByIdQuery(toDoId);

  const nextToDo = () => {
    setToDoId(toDoId + 1);
  }

  const prevToDo = () => {
    if (toDoId === 1) return;
    setToDoId(toDoId - 1);
  }
  return (
    <div>
      <h1>ToDo - RTK Query</h1>
      <hr />

      <h4>isLoading: { (isLoadingToDo) ? 'true' : 'false' }</h4>

      <pre>
        {JSON.stringify(toDo)}
      </pre>

      {/* <ul>
        {
            toDos.map((toDo: ToDo) => (
              <li key={toDo.id}>
                <strong>{(toDo.completed) ? 'Done' : 'Pending'}: </strong>
                {toDo.title}
              </li>
            ))
        }
      </ul> */}

      <button
        onClick={prevToDo}
      >
        Prev To Do
      </button>
      <button
        onClick={nextToDo}
      >
        Next To Do
      </button>
    </div>
  );
};
