import React from 'react';
import Todos from '../features/Todos';
import TodoForm from '../features/TodoForm';
import TodoFilters from '../features/TodoFilters';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo Hero</h1>
      </header>
      <TodoForm />
      <TodoFilters />
      <Todos />
    </div>
  );
}

export default App;
