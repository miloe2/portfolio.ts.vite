import { useState, useRef } from "react";
import pht1 from "../../assets/Images/photos/Int-pht1.webp";
import pht2 from "../../assets/Images/photos/Int-pht2.webp";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Introduce = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  const handleVisibilityChange = (target: Element, isIntersecting: boolean) => {
    if (target === textRef.current) {
      setTextVisible(isIntersecting);
    } else if (target === imageRef.current) {
      setImageVisible(isIntersecting);
    }
  };

  useIntersectionObserver([textRef, imageRef], handleVisibilityChange);

  const texts = [
    { text: "Similique", class: "", delay: "delay-300" },
    { text: "Lorem um", class: "text-right", delay: "delay-500" },
    { text: "dolor sitip,", class: "text-cente", delay: "delay-700" },
    { text: "consectetr", class: "text-center pl-[10%]", delay: "delay-1000" },
  ];

  return (
    //  bg-green-500 lg:bg-red-500 2xl:bg-blue-500
    <div className="w-full flex flex-col max-w-sm lg:max-w-2xl 2xl:max-w-4xl mx-auto bg-green-00">
      <div
        ref={textRef}
        className={`
          w-full h-full mx-auto  bg-red-00 `}
      >
        {texts.map((item, index) => (
          <p
            key={index}
            className={`
              ${item.class} transition-all z-10 duration-1000 transform text-introduce-heading font-bold leading-snug text-[#242424] relative whitespace-nowrap 
              ${item.delay} 
              ${isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            {item.text}
          </p>
        ))}
      </div>
      <div
        ref={imageRef}
        className={`
        ${isImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}
        min-w-60 w-1/2 self-end sm:translate-x-10 -translate-y-[10%] transition-all duration-1000 -top-10 relative`}
      >
        <img src={pht1} alt={pht1} className="w-full h-full object-cover  opacity-10" />
      </div>
      <div
        className={`
        ${isImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        min-w-64 w-1/2 delay-1000 duration-1000`}
      >
        <img src={pht2} alt={pht2} className="w-full h-full object-cover opacity-10" />
      </div>
    </div>
  );
};

export default Introduce;
