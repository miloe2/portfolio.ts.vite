import { useState, useEffect, useRef } from 'react';
import pht1 from '../../assets/Images/photos/Int-pht1.webp';
import pht2 from '../../assets/Images/photos/Int-pht2.webp';

const Introduce = () => {

    const [isTextVisible, setTextVisible] = useState(false);
    const [isImageVisible, setImageVisible] = useState(false);

    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const textObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTextVisible(true);
                    // 이미지 애니메이션을 위한 setTimeout
                    setTimeout(() => {
                        const imageObserver = new IntersectionObserver(
                            (entries) => {
                                if (entries[0].isIntersecting) {
                                    setImageVisible(true);
                                }
                            },
                            { threshold: 0.1 }
                        );

                        if (imageRef.current) {
                            imageObserver.observe(imageRef.current);
                        }
                    }, 200); // 1초 후 이미지 애니메이션 시작 (시간 조절 가능)
                }
            },
            { threshold: 0.2 }
        );

        if (textRef.current) {
            textObserver.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                textObserver.unobserve(textRef.current);
            }
            if (imageRef.current) {
                textObserver.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className='w-full h-auto relative flex justify-center items-center px-44 max-[768px]:px-0'>
            <div className='relative'>
                <div className='absolute -bottom-80 -right-1/12 w-80 h-96 ' ref={imageRef}>
                    <img 
                        src={pht1}
                        alt="" 
                        className={`w-full h-full object-cover transition-all duration-1000 object-bottom
                            ${!isImageVisible ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'}`}
                    />
                </div>

                <div className='absolute -bottom-11/12 right-7/12 w-96 h-72 max-[768px]:-left-10'>
                    <img 
                        src={pht2}
                        alt="" 
                        className={`w-full h-full object-cover transition-all duration-1000 
                            ${!isImageVisible ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'}`}
                    />
                </div>
                <div ref={textRef}
                className={`text-8xl h-full w-auto font-bold leading-snug text-[#242424] 
                    transition-all duration-1000 whitespace-nowrap max-[768px]:text-7xl max-[768px]:leading-relaxed
                    ${!isTextVisible ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'}`}
                    >
                            <div>안녕하세요.</div>
                            <div style={{marginLeft:'4ch'}}>환하게 빛을</div>
                            <div style={{marginLeft:'3ch'}}>밝히고 있는,</div>
                            <div style={{marginLeft:'2ch'}}>이택현입니다.</div>                
                </div>
            </div>
        </div>
    );
};

export default Introduce;
