import React from 'react'
import { useRouter } from 'next/router'

const Main = (props) => {
  const router = useRouter();
  const experienceList = () => {
    router.push('/ours/list')
  }
  return (
    <>
    <div class="search">
      <h5>체험명 검색</h5>
        <input name="searchword" type="text" id="experience_search" placeholder="검색어를 입력하세요." />
        <br />
      <h5>체크인/체크아웃 선택</h5>
        <span class="filter-type listing-checkin">
          <input name="search_checkin" type="date" id="checkin" autocomplete="off" placeholder="체크인" /> 
        </span>
        <span class="filter-type listing-checkout">
          <input name="search_checkout" type="date" id="checkout" autocomplete="off" placeholder="체크아웃" /> 
        </span>
      <br/>
      <button onClick = {experienceList}>검색</button>
      <div class="img" id="img">
      <img src="/images/templemap.png" />
      </div>


      
    </div>



    </>
 )}

export default Main