import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../Layout/Header/Header';

// 체험 리스트

const Main = (props) => {
  const router = useRouter();
  const Details = () => {
    console.log('Details');
    router.push('/ours/details')
  }
  return (
    <>
    <li class="et-active-listing clearfix">
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
                            <a href="/temple_info.asp?t_id=tsyong" class="temple-link" target="_blank">사찰정보보기</a>
                            <a href="/reserv_temple_rest.aspx?ProgramId=17573" class="readmore-link" target="_blank">예약하기</a>
                        </li>
                        <button onClick = {Details}>예약</button>
    </>
  )
}

export default Main