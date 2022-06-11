import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../Layout/Header/Header';
import ReservationFinish from './ReservationFinish';

// 체험 예약정보 입력페이지

const Main = (props) => {
  const router = useRouter();
  const ReservationFinish = () => {
    console.log('ReservationFinish');
    router.push('/ours/reservationFinish')
  }
  return (
    <>
    <div class="search">
      <h5>체험명 검색</h5>
        <input name="searchword" type="text" id="experience_search" placeholder="검색어를 입력하세요." />
        <br />
      <h5>체크인/체크아웃 선택</h5>
        <span class="filter-type listing-checkin">
          <input name="search_checkin" type="text" id="checkin" autocomplete="off" placeholder="체크인" /> 
        </span>
        <span class="filter-type listing-checkout">
          <input name="search_checkout" type="text" id="checkout" autocomplete="off" placeholder="체크아웃" /> 
        </span>
      <br/>
      <button onClick = {ReservationFinish}>확인</button>
    </div>
    <div class="map">
    </div>
    </>
  )
}

export default Main