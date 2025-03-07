import MainWork from "../components/develope/MainWork";
import PrjList from "../components/develope/PrjList";
import Detail from "../components/develope/Detail";
import { useRef, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import { IconContext } from "react-icons";
const Develope = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = () => {
    if (componentRef.current) {
      window.scrollTo({
        top: componentRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // 스크롤을 최상단으로 이동
  }, []); // 빈 배열로 전달하여 컴포넌트가 처음 마운트될 때 한 번만 실행

  return (
    <div className="overflow-hidden relative h-auto">
      <MainWork />
      <div ref={componentRef} className="w-full h-20 relative" />
      <PrjList />
      <Detail />
      <button
        onClick={scrollToComponent}
        className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-zinc-700 opacity-50 text-lg text-white
            justify-center items-center flex"
      >
        <IconContext.Provider value={{ className: "w-4 h-4" }}> {/* ✅ 아이콘 스타일 설정 */}
          <SlArrowUp />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Develope;
