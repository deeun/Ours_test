import React from 'react'
import { useRouter } from 'next/router'


const Header = (props) => {
  const router = useRouter();
  const CheckReservation = () => {
    console.log('CheckReservation');
    router.push('/ours/checkReservation')
  }
  return (
    <>
      <div id="main-menu">
      <div class="container clearfix">
        

        <div class="logo">
          <a href="https://www.templestay.com/reserv_search.aspx">
          <img src="images/logo-color.png"></img>
          우리것
          </a>
        </div>
        
        <a href ="https://ovenapp.io/view/hw9xlOUNIKpDa2hZO7n8bGOPbL26vGaT/iDhP7">
          <button>농어촌 체험하기</button>
        </a>

        <a href ="https://ovenapp.io/view/hw9xlOUNIKpDa2hZO7n8bGOPbL26vGaT/iDhP7">
          <button>농수산물 구매하기</button>
        </a>

        <a>
        <button onClick = {CheckReservation}>예약확인</button>
        </a>

        <a href ="https://ovenapp.io/view/hw9xlOUNIKpDa2hZO7n8bGOPbL26vGaT/iDhP7">
          <button>체험소개</button>
        </a>


        </div>
        
      </div>
    </>

  )
}

export default Header