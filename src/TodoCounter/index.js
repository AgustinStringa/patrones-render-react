import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  const returnText = loading ? "Cargando todos..." : `Has completado ${completedTodos} de ${totalTodos} TODOs`

  return (
    <h2 className="TodoCounter">{returnText}</h2>
  );
}

export { TodoCounter };
