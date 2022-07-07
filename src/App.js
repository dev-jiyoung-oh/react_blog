/* eslint-disable */
import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  // state
  // 변수대신 쓰는 데이터 저장공간
  // useState()를 이용해 만들어야함
  // 문자, 숫자, array, object 다 저장가능
  // 변경되면 html이 새로고침없이 자동으로 재렌더링됨!!!
  // <-> 그냥 변수는 새로고침됨

  // ES6 destructuring 문법: array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  let [글제목, 글제목변경] = useState(['바이욤', 'gg', 'hi']); // [state데이터, state데이터 변경 함수]
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자코트추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발하는 징어군 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
        <p>22.07.06 발행</p>
        <button onClick={ 제목바꾸기 }>제목 변경</button>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] }</h3>
        <p>22.07.06 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] }</h3>
        <p>22.07.06 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
