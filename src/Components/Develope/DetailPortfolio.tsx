import React from 'react';
import twcssImg from '../../assets/Images/photos/tailwind css.png'
import TSLogoSnipet from '../Detail/TSLogoSnipet';
import RightFullImage from '../Detail/RightFullImage';
import Text2Parg from '../Detail/Text2Parg';
import Center9image from '../Detail/Center9image';
import LeftImage from '../Detail/LeftImage';
import ViewCode from '../Detail/ViewCode';
import PrjSummary from '../Detail/PrjSummary';

import videoUrl from '../../assets/Video/exhibitVideo.mp4';
import pfDetail1 from '../../assets/Images/Photos/Detail/dv2.webp'
import pfDetail2 from '../../assets/Images/Photos/Detail/dv1.webp'
import pfDetail3 from '../../assets/Images/Photos/Detail/dv3.webp'
import pfDetail4 from '../../assets/Images/Photos/Detail/dv4.webp'
import pfDetail5 from '../../assets/Images/Photos/Detail/dv5.webp'
import pfDetail6 from '../../assets/Images/Photos/Detail/dv6.webp'
import pfDetail7 from '../../assets/Images/Photos/Detail/dv7.webp'
import pfDetail8 from '../../assets/Images/Photos/Detail/dv8.webp'
import pfDetail9 from '../../assets/Images/Photos/Detail/dv9.webp'


const DetailPortfolio = () => {
    const themeColor = '[#FF5851]'
    const txtColor = '[#0041AF]'
    const descColor ='white'

    return (
        <React.Fragment>

        <PrjSummary
            title1='개요'
            desc1='팀 구성 : 개인 프로젝트
            개발 기간 : 1개월.
            역할 : 100%'
            title2='주요역할'
            desc2='- 전반적인 사이트 제작 
            - 인터렉티브한 UI/UX 구현
                    '
            desc3='- TypeScript, Tailiwind CSS 연습
            - IntersectionObserve, zustand 적용'
            txtColor = {txtColor}
        />

        <ViewCode
        bgColor = {themeColor}
        txtColor='black'
        site = 'https://miloe2.github.io/portfolio.ts.vite/'
        git = 'https://github.com/miloe2/portfolio.ts.vite'
        />
        <div className='w-screen h-40'/>

        <div className='w-screen h-screen px-44 max-[1023px]:px-10'>
            <TSLogoSnipet/>
        </div>

        <div className='w-screen h-20'/>


        <div className='w-screen h-screen px-44 max-[1023px]:px-10'>
        <RightFullImage 
            bgColor = {themeColor}
            txtColor={txtColor}
            descColor = {descColor}
            img={twcssImg} 
            title='Tailwind CSS' 
            desc='기존에 사용하던 Styled Components에서
            평소 사용해보고 싶었던, Tailwind CSS로 
            작업하였습니다.  ' />
        </div>
            <div className='w-screen h-40'/>

            <div className='w-full h-auto max-[1023px]:px-10'>
        <Text2Parg
            txtColor={txtColor}
            title='Work.Develope' 
            desc='현재까지 연습한 개발 관련 
            프로젝트를 정리하였습니다. 
            ' />

        <Center9image
            bgColor = {themeColor}
            img1={pfDetail1}
            img2={pfDetail2}
            img3={pfDetail3}
            img4={pfDetail4}
            img5={pfDetail5}
            img6={pfDetail6}
            img7={pfDetail7}
            img8={pfDetail8}
            img9={pfDetail9}
        />
        <div className='w-screen h-72'/>
        
        <LeftImage
            bgColor='#f5f5f5'
            txtColor={txtColor}
            title='Work.Exhibition'
            desc='기존에 근무하였던, Exhibition 업무도
                정리하여 페이지를 구성하였습니다. '
            source={videoUrl}
            items='center'
        />

        <div className='w-screen h-40'/>
        </div>


        </React.Fragment>
        
        
    );
};

export default DetailPortfolio;

