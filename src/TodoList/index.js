import React from 'react';
import './TodoList.css'

function TodoList({ error, loading, searchedTodos, searchValue, totalTodos, onError, onLoading, onEmptytodos, onEmptySearchResults, render, children }) {
  const renderFunc = render || children

  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {(!loading && !totalTodos && !searchValue) && onEmptytodos()}
      {(!loading && !searchedTodos?.length && searchValue) && onEmptySearchResults(searchValue)}
      <ul>
        {!loading && searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
