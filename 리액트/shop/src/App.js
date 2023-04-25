import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, Card } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동 도와줌

  console.log(shoes[0].title);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate(-1)}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
      
          <div className='container'>
            <div className='row'>

              {
                shoes.map((a,i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i+1}></Card>
                  )
                })
              }

            </div>
          </div>
          </>
        }/>
        <Route path="/detail" element={<Detail></Detail>}/>
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>멤버아님</div>}/>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>

      


    </div>
  );
  
  function Card(Props){
    return(
      <div className='col-md-4'>
        <img src={"https://lovesykkkk.github.io/shop/shoes" + Props.i + ".jpg"} width="80%"/>
        <h4>{Props.shoes.title}</h4>
        <p>{Props.shoes.price}</p>
      </div>
    )
  }
  
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){

  let navigate = useNavigate();

  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <h6 type='button' onClick={()=>{navigate('one')}}>이벤트1</h6>
      <h6 type='button' onClick={()=>{navigate('two')}}>이벤트2</h6>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

/*
1. 오늘 만든 상품목록 컴포넌트로 만들기. 
컴포넌트도 길면 다른파일로 빼도 상관없음

2. 컴포넌트 3개 => 1개  = > map 함수 
난이도 어려움.. 

*/