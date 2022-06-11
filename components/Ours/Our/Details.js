import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../Layout/Header/Header';

// 체험 상세정보

const Main = (props) => {
  const router = useRouter();
  const Reservation = () => {
    console.log('Reservation');
    router.push('/ours/reservation')
  }
  return (
    <>
    <div class="listing-image">
                            	<img src="http://noms.templestay.com/images/RsImage/S_5283.png"></img>
                            	<div class="et-status et-rest">휴식형</div>
                            </div>
                            <div class="listing-text">
                                <h3>[용화사(통영)] 2022년 문화누리카드 소지자를 위한 템플스테이(50% 할인)</h3>
                                <p class="meta-info">경남, 휴식형
                                                </p>
                                <p>경상남도 통영시 봉수로 107-82 (봉평동) 055-649-3060<br/>
                                 ...
                                </p>
                            </div> 
                            <button onClick = {Reservation}>신청하기</button>
    </>
  )
}

export default Main