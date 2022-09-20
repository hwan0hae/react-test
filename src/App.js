import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
import MovieList from './pages/MovieList';
import Detail from './pages/Detail';
function App() {
  return (
    <div className='App'>
      <h1>TEST</h1>
      <br />
      <div className='nav'>
        <Link to='/'> HOME </Link> | <Link to='/counter'> Counter </Link> |{' '}
        <Link to='/todoList'> Todo List </Link> |{' '}
        <Link to='/movieList'> Movie List </Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todoList' element={<TodoList />} />
        <Route path='/movieList' element={<MovieList />} />
        <Route path='movie/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
