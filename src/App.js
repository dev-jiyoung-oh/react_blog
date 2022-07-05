import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '하이욤';
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발하는 징어군 Blog</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
}

export default App;
