import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const Hello = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='w-full h-auto relative'>

                <div className='sticky top-0 h-full w-full overflow-hidden'>
                    <div className=' w-full h-screen justify-start items-center flex pl-10 max-[768px]:p-0'>
                        <div 
                            className='box-border min-w-1/2 h-11/12 relative bg-[#FF5851] transition-width duration-700 ease-in-out' 
                            style={scrollY < 50 ? { width: '50%' } : { width: '95%' }}
                        >
                    

                            <div 
                                className={`absolute top-5/12 left-1/3 transform -translate-x-1/2 -translate-y-1/2  text-white transition-all duration-700
                                            max-[768px]:left-1/2 
                                ${scrollY > 0 && scrollY < 1000 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    
                                <div className='text-4xl leading-normal whitespace-nowrap   font-bold
                                                max-[768px]:text-3xl max-[768px]:leading-relaxed '> 
                                    내안에 빛이 있으면 <br/>
                                    스스로 빛나는 법이다.
                                </div>
                            </div>

                            <div className='absolute top-1/3 md:-right-1/3 -right-1/2  font-black text-[#242424] md:text-9xl text-6xl '>
                                안녕<br/>
                                하세요<span className='text-[#FF5851]'>.</span>
                            </div>
                        </div>
                        {/* <div 
                            className='bg-zinc-50 h-11/12 transition-width duration-700 ease-in-out' 
                            style={scrollY < 50 ? { width: '50%' } : { width: '5%' }}
                        ></div> */}
                    </div>
                    
                    <div className="animate-bounce left-1/3 flex  items-center w-2/12 h-auto justify-end
                        transition-all duration-700   text-white absolute bottom-20 " 
                        style={scrollY < 1000 ? {opacity:'100'} : {opacity:'0'}  }>
                        <div className='-rotate-90'>
                            <div className=' text-lg flex'><BsArrowLeft/> <span className='text-xs ml-2'>Scroll</span>  </div>
                        </div>
                    </div>

                </div>
                <div className='h-96 '/>
                <div className='h-96 '/>

            </div>
        </div>
    );  
};

export default Hello;
