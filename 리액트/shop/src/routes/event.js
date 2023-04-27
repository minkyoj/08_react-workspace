import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Event(){
    let navigate = useNavigate();
    return(
        <div>
            <h1>
                오늘의 이벤트
            </h1>
            <button onClick={()=>navigate('/event/one')}>첫번쨰</button>
            <button onClick={()=>navigate('two')}>두번째</button>
            <Outlet></Outlet>
        </div>


    )

}

function EventOne(){
    return(
        <div>
            <h5> 첫 주문시 양배추즙 서비스</h5>
            
        </div>
    )
}

function EventTwo(){
    return(
        <div>
            <h5>생일 기념쿠폰</h5>
        </div>
    )
}

export {Event,EventOne,EventTwo}