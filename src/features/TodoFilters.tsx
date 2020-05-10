import React from 'react';

type TodoFilterProps = {
  filterType: 'all' | 'active' | 'completed';
};

const TodoFilter: React.FC<TodoFilterProps> = (props) => {
  return (
    <li className="TodoFilter">
      <button>{props.filterType}</button>
    </li>
  );
};

const TodoFilters: React.FC = (props) => {
  return (
    <nav className="TodoFilters">
      <ul>
        <TodoFilter filterType="all" />
        <TodoFilter filterType="active" />
        <TodoFilter filterType="completed" />
      </ul>
    </nav>
  );
};

export default TodoFilters;
