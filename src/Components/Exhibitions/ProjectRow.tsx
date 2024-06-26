import  { useEffect, useRef, useState, useCallback  } from 'react';
import  projectData  from '../../assets/Data/ProjectData';


const ProjectRow = () => {
    const diaryImageRef = useRef<HTMLDivElement | null>(null);
    // const [scrollX, setScrollX] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);
    const [windowWidth] = useState(window.innerWidth);
    const [barWidth, setBarWidth] = useState(0);
    const [paddingLeft] = useState(window.innerWidth >= 1024 ? 192 : 10);
    // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
 // 가로 스크롤 적용
 const scrollHorizontally = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const element = e.currentTarget as HTMLElement;
    element.scrollLeft += (e.deltaY + e.deltaX) * 1.4;
    if (diaryImageRef.current) {
        const scrollX = diaryImageRef.current.scrollLeft;
        setBarWidth((scrollX / (totalWidth + paddingLeft - windowWidth)) * 100);
    }
}, [totalWidth, paddingLeft, windowWidth]);

// 스크롤 이벤트 핸들러
const handleScroll = useCallback(() => {
    if (diaryImageRef.current) {
        const scrollX = diaryImageRef.current.scrollLeft;
        setBarWidth((scrollX / (totalWidth + paddingLeft - windowWidth)) * 100);
    }
}, [totalWidth, paddingLeft, windowWidth]);

useEffect(() => {
    const scrollElement = diaryImageRef.current;
    setTotalWidth(scrollElement?.scrollWidth || 0);
    if (scrollElement) {
        scrollElement.addEventListener('wheel', scrollHorizontally);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
        if (scrollElement) {
            scrollElement.removeEventListener('wheel', scrollHorizontally);
        }
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollHorizontally, handleScroll]);

    // useEffect(() => {
    //     const scrollElement = diaryImageRef.current;
    //     setTotalWidth(scrollElement?.scrollWidth || 0);
    //     if (scrollElement) {
    //         scrollElement.addEventListener('wheel', scrollHorizontally);
    //     }
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         if (scrollElement) {
    //         scrollElement.removeEventListener('wheel', scrollHorizontally);
    //         }
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    //     },[scrollHorizontally]);

    //     // 가로 스크롤 적용
    //     function scrollHorizontally(e: WheelEvent) {
    //         e.preventDefault();
    //         const element = e.currentTarget as HTMLElement;
    //         element.scrollLeft += (e.deltaY + e.deltaX) * 1.4;
    //         if (diaryImageRef.current) {
    //             const scrollX = diaryImageRef.current.scrollLeft;
                
    //             setBarWidth((scrollX / (totalWidth + paddingLeft - windowWidth)) * 100);
    //         }
    //     }
    
    //     // 스크롤 이벤트 핸들러
    //     const handleScroll = () => {
    //         if (diaryImageRef.current) {
    //             const scrollX = diaryImageRef.current.scrollLeft;
    //             setBarWidth((scrollX / (totalWidth + paddingLeft - windowWidth)) * 100);
    //         }
    //     };
    


    const BlackBG =  'bg-black w-full h-full absolute top-0 left-0 opacity-10 ';

    return (
        <>
        <div className='w-full h-screen bg-black flex justify-center flex-col lg:pl-48 pl-10'>
        <div className='text-xl font-bold py-8 text-red-600'> 프로젝트 </div>
            {/* 이미지 들어가는 공간 */}
            <div ref={diaryImageRef} 
                className=' w-auto h-1/2 items-center whitespace-nowrap flex  overflow-x-auto  scrollbar-hide'>
                {projectData.map((item, index) => (
                    <div className=' w-72 h-full box-border flex-shrink-0 overflow-hidden relative mr-1' key={index}>
                        <div className={BlackBG}/>
                        <div className='w-full h-2/5 absolute bottom-0 text-zinc-100 justify-center flex'>
                            <div className=' w-4/5 h-auto pr-10'>
                                <div className='text-sm/6 whitespace-pre-line'> {item.date} </div>
                                <div className='text-sm/6 whitespace-pre-line'> {item.location} </div>
                                <div className='text-xl font-bold py-1 whitespace-pre-line'> {item.title} </div>
                                {/* <div className='text-sm/6 whitespace-pre-line'> {item.desc} </div> */}
                            </div>
                        </div>
                        

                        <img src={item.img} alt="" className='w-full h-full object-cover'/>

                    </div>
                ))}
            </div>
            {/* 가로 스크롤바  */}
            <div className='h-16 lg:min-w-[20rem] w-full  items-end flex overflow-hidden'>
                {/* <div className='w-full h-10 bg-yellow-500 ' > */}
                <div className='lg:w-96 w-[200px] h-2 bg-[#616060] ' >
                    {/* {(scrollX / totalWidth) * 100} <br /> */}
                    {/* { scrollX / (totalWidth + 192 - windowWidth )* 100} <br />
                    
                    {totalWidth}
                    {windowWidth} */}
                    <div className=' h-full bg-red-600 max-w-[100%]'
                    style={{ width: `${barWidth}%` }}
                    >
                    </div>
                </div>
                {/* <div className='hidden'> */}
                {barWidth}


                {/* </div> */}

            </div>
           
        </div>
        </>
    );
};

export default ProjectRow;