import React from 'react';
import pada1 from '../../assets/Images/Photos/pada1.png'
import pada2 from '../../assets/Images/Photos/pada2.png'
import pada3 from '../../assets/Images/Photos/pada3.png'

import RightFullImage from '../Detail/RightFullImage';
import LeftImage from '../Detail/LeftImage';
import ViewCode from '../Detail/ViewCode';
import PrjSummary from '../Detail/PrjSummary';
import Left1ImageProps from '../Detail/Left1Image'

import videoUrl from '../../assets/Video/pada3video.mp4';




const DetailPortfolio = () => {
    const themeColor = '[#00D191]'
    const txtColor = '[#0041AF]'
    const descColor ='white'
    return (
        <React.Fragment>

        <PrjSummary
            title1='개요'
            desc1='팀 구성: BE 1명, FE 1명, 
            디자이너 1명
            개발 기간 : 2개월.
            역할 : 프론트엔드 100%'
            title2='개발주안점'
            desc2='- 100개 이상의 종/모프 필터 검색
            - API 호출을 최소화 하기 위한 설계
            - Cursor형 무한 스크롤
                    '
            desc3='- 게시글 작성 업로드 이미지 압축
            - 글수정 이미지 변경 체크 및 드래그 수정'
            txtColor = {txtColor}
        />

        <ViewCode
        bgColor = {themeColor}
        txtColor='black'
        site = 'https://padaapp.com'
        />
        <div className='w-screen h-40'/>



        <div className='w-screen h-screen px-44 max-[1023px]:px-10'>
        <RightFullImage 
            bgColor = {themeColor}
            txtColor={txtColor}
            descColor = {descColor}
            img={pada1} 
            title='최소의 API 호출을 위한
             VUEX 설계 ' 
            desc='종/모프가 100종 이상이었기 때문에,
            API 호출이 잦을수 있었습니다.
            대분류를 vuex로 상태관리하여 최소한의 통신으로
            사용자경험을 끌어올렸습니다.     ' />
        </div>
            <div className='w-screen h-40'/>
            <Left1ImageProps
                bgColor={themeColor}
                txtColor={txtColor}
                title='게시글 작성 
                및 수정'

                desc='
                이미지 업로드 시, 용량을 압축하고
                드래그 순서 변경이 가능합니다. 
                글 수정 시 이미지 변경을 추적하여
                다른 API 백엔드에 전달합니다.  '
                
                img1={pada3}

            />
        <div className='w-screen h-72'/>

            <div className='w-full h-auto max-[1023px]:px-10'>
        <LeftImage
                bgColor='#00D191'
                txtColor = {txtColor}
                source={pada2}
                items='end'
                title='APP 유입을 위한
                미디어쿼리 ' 
               desc='앱 기반으로 만들어진 프로젝트 특성 상
               웹에서 앱으로 유입이 되도록 
               분양탭 모두 미디어쿼리가 적용되었습니다. ' />

        <div className='w-screen h-72'/>
        
        <LeftImage
            bgColor='#00D191'
            txtColor={txtColor}
            title='커서형 무한스크롤'
            desc='무한스크롤을 적용하여서, 
            사용자 경험을 개선하였습니다.'
            source={videoUrl}
            items='center'
        />

        <div className='w-screen h-40'/>
        </div>


        </React.Fragment>
        
        
    );
};

export default DetailPortfolio;

