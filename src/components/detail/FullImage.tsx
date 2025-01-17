import React from 'react';
interface FullImageProps {  
    img :string;
    title: string;
    desc: string;
    txtColor :string;
}


const FullImage: React.FC<FullImageProps> = ({img, txtColor, title, desc }) => {
  return (
    <div className={`w-full h-screen flex relative items-center mb-60`}>
      <div className=' ring- absolute left-[10%] bottom-[20%] lg:top-1/2 '>
        {/* <div className='absolute left-40 max-[768px]:left-28 '> */}
        <div
          className='text-4xl/12 font-bold whitespace-pre-line  py-2 '
          style={{ color: txtColor }}> 
          {' '}
          {title}
          {' '}
        </div>
        <div className='text-sm/6 whitespace-pre-line '> 
          {desc}
        </div>
      </div>
      <div className='w-full h-full'>
        <img
          src={img}
          alt=""
          className='w-full h-full object-cover'/>
      </div>
    </div>
  );
};

export default FullImage;