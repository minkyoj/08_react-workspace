import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";



function Detail2() {

}


let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : ${props=> props.bg == 'blue'?'white':'black'};
  padding : 10px;
`
let Box = styled.div`
  background : grey;
  padding : 20px;
`



// let NewBtn = styled.button(YellowBtn)`
//  font-size : 20px;
//  `



function Detail(props){

    let [alert, setAlert] = useState(true);

    // useEffect(()=>{
    //     // // 여기 적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    //     // for(let i=0; i<10000; i++){
    //     //   console.log(i);
    //     // }
    //   })

    setTimeout(() => {
      setAlert(false);
    }, 2000);
    
    let [count, setCount] = useState(0);

    let {id} = useParams();
    let imgNum = parseInt(id)+1;
    let imgSrc = 'https://donghyun1597.github.io/shop/shoes'+imgNum+'.jpg';
    let searchId = props.shoes.find((e)=>{return e.id==id});
    // let shoes=props.shoes;
    return(
      <div className="container">

      {
        alert == true ? <Alert/> : null
      }


        {count}
        <button onClick={()=>{setCount(count+1)}}>버튼</button>

        <Box>
          
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
        </Box>
          <div className="row">
            <div className="col-md-6">
              <img src={imgSrc} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{searchId.title}</h4>
            <p>{searchId.content}</p>
            <p>{searchId.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 



    )


}

function Alert() {
  return(
    <div className="alert alert-warning">
      2초 이내 구매시 할인
    </div>
  )
  
}

export default Detail;