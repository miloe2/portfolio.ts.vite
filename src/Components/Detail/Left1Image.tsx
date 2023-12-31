import React from 'react';

interface Left1ImageProps {
    bgColor: string;
    img1: string;
    title : string;
    desc : string;
    txtColor :string;

}

const Left1Image :React.FC<Left1ImageProps> = ({ bgColor, txtColor, img1, title, desc }) => {
    return (
        <div className=' w-full h-full flex relative justify-center items-center'>
            <div className={`w-2/3 h-auto  bg-${bgColor} flex justify-center items-start flex-col`}>
                <img src={img1} alt="" className='w-full h-full '/>
            </div>
            <div className={`w-1/2 h-full  flex justify-center items-center flex-col`}>
                <div className='w-72 h-auto max-[768px]:pl-10 '>
                    <div className='text-4xl/12 font-bold whitespace-pre-line  py-2 ' style={{ color: txtColor }}> {title} </div>
                    <div className='text-sm/6 whitespace-pre-line  '> 
                        {desc}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Left1Image;