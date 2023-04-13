import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼우동맛집';
  let [logo, setLogo] = useState('ReactBlog');
  let [a, b] = useState(['여름 코트 추천', '역삼 우동 맛집', '리액트 독학']);
  //let [title, t] = useState('역삼 우동 맛집');
  //let [title2, t2] = useState('리액트 독학');
  // document.querySelector('h4').innerHTML(post);
  let[따봉, 따봉변경] = useState(0);

  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* 
        
        ** JSX 문법
        1. 리액트에서는 class 말고 className 이라고 쓰장
        => 왜 리액트에서는 JSX 문법을 사용할까?
        원래 : 리액트 <div> 만들고자하면
        React.createEletment('div', 'helloWorld');
        => 이런식으로 어렵게 코드 짜야함.

        2. 변수 넣을 때 {중괄호} 사용한다.

        3. style 넣을때 style={{속성:'속성값'}}
        => ex) font-size : 뺄셈 처럼 인식 => fontSize

        4. return() 안에 병렬로 태그 2개 이상 기입금지

        state 만드는법
        1. import {userState}
        2. userState(보관할 자료)
        3. let [작명, 작명]

        ** state 사용하는 이유?
        => 변수로 선언 한 경우 : 변수내용 바뀌게 되면, 변수내용 바뀌었으니까 html도 고쳐달라 => 생자바스크립트
        => state 선언 한 경우 : state변경이 일어나면, state가 포함된 html을 자동으로 재랜더링 해준다.

        // 전부 다 state로 선언하면 될까?
        => state 이점 : 변경 자주 되는 데이터 .. (로고, 대메뉴 ? )
        => 상품명, 글제목, 가격 이런것 처럼 자주 변할 것 같은 데이터들 ...

        ** 자주 변경되는 데이터 state에 저장해놨다가 html {데이터바인딩}
        1. 변경할 일이 없는 데이터들
        2. 굳이 html에 표기가 필요 없는 데이터 그냥 변수에 저장

        oncClick={} 안에 함수 이름을 넣어야함
        <div onClick="실행할 구문~"></div> => 원래방식
        <div onClick={실행할 함수명}></div> 
        => Click 대문자
        => {} 중괄호 사용
        => 그냥 코드가 아니라 함수를 넣어야 잘 동작함
        => 함수 만드는 문법 사용해도 상관없음

        let [따봉, 따봉변경] = useState(0);
        사용법) 
          따봉변경(새로운 값)
          => state 변경 함수는 ()안에 넣은걸로 state를 갈아치워주는 함수
          따봉변경(따봉 = 따봉 + 1) // 이런거 안됨
          따봉변경(따봉+1)

          [...복사할데이터] => 독립적인 복사본을 생성해줌(깊은복사)
          => 리액트에서 array, object state를 
        */
        }
        <h4 style={{color:'red', fontSize:"16px"}}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{a[0]} <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span>      {따봉} </h4>
        <p>4월 13일 발행</p>
        <button onClick={()=>{
            // b(['가을 코트 추천', '역삼 우동 맛집', '리액트 독학'])
           // a[0] = '가을 코트 추천';
           // b(a);
           let copy = [...a];
           copy[0] = '가을 코트 추천';
           b(copy);
          }}>바꿔</button>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>4월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>4월 13일 발행</p>
      </div>
      <button type="button" onClick={() => {
        let copy2 = [...a];
        copy2 = copy2.sort();
        b(copy2);

      }}>정렬</button>
    </div>
  );
}

export default App;