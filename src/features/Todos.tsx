import React from 'react';

import { Todo } from '../models/todo.model';

const todos: Todo[] = [
  {
    id: 'id0',
    text: 'Learn',
    completed: false,
    created: new Date(),
  },
  {
    id: 'id1',
    text: 'Learn',
    completed: false,
    created: new Date(),
  },
  {
    id: 'id2',
    text: 'Learn',
    completed: false,
    created: new Date(),
  },
];

const Todos: React.FC = (props) => {
  return (
    <ul className="Todos">
      {todos.map((todo) => (
        <li className="Todo" key={todo.id}>
          <span className="Todo__text">{todo.text}</span>
          <span className="Todo__date">
            {todo.created.toLocaleString(undefined, {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
