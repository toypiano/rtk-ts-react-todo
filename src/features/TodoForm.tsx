import React from 'react';

const TodoForm: React.FC = (props) => {
  return (
    <form className="TodoForm">
      <div className="input-control">
        <label htmlFor="todo-input" className="sr-only">
          Enter Todo
        </label>
        <input type="text" id="todo-input" />
      </div>
      <button type="button">ADD</button>
    </form>
  );
};

export default TodoForm;
