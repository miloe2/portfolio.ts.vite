import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import projectData from "../../assets/data/ProjectData";
import TitleText from "../common/TitleText";

const ProjectRow = () => {
  const diaryImageRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 마우스 휠 가로 스크롤 핸들러
  const handleWheelScroll = useCallback((e: WheelEvent) => {
    if (!diaryImageRef.current) return;
    e.preventDefault();
    diaryImageRef.current.scrollLeft += (e.deltaY + e.deltaX) * 1.4;
  }, []);

  // 가로 스크롤 진행률 업데이트 핸들러
  const handleScrollProgress = useCallback(() => {
    if (!diaryImageRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = diaryImageRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  }, []);

  // 이벤트 리스너 등록 및 정리
  useEffect(() => {
    const scrollElement = diaryImageRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener("wheel", handleWheelScroll);
    scrollElement.addEventListener("scroll", handleScrollProgress);

    // 초기 진행률 설정
    handleScrollProgress();

    return () => {
      scrollElement.removeEventListener("wheel", handleWheelScroll);
      scrollElement.removeEventListener("scroll", handleScrollProgress);
    };
  }, [diaryImageRef.current]);
  const progressBar = useMemo(
    () => (
      <div className="max-w-xs w-full h-2 bg-[#616060] mt-8">
        <div
          className="h-full bg-[#D81519]"
          style={{ width: `${Math.min(scrollProgress, 100)}%` }}
        />
      </div>
    ),
    [scrollProgress],
  );
  return (
    <>
      <section className="w-full max-w-7xl mx-auto  flex justify-center flex-col pl-10 xl:pl-0">
        <TitleText title="프로젝트" txtColor="#D81519" />
        <div
          ref={diaryImageRef}
          className="items-center whitespace-nowrap flex overflow-x-auto scrollbar-hide space-x-4 mt-4 pr-10"
        >
          {projectData.map((item, index) => (
            <div className="w-72 h-96 flex-shrink-0 relative" key={index}>
              <div
                className="w-full h-3/5 bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="w-full h-2/5 p-4 absolute bottom-0 text-gray-200 flex flex-col bg-[#353742] rounded-b-lg">
                <p className="text-sm/6 "> {item.date} </p>
                <p className="text-base/6 font-thin"> {item.location} </p>
                <p className="text-xl font-medium whitespace-pre-wrap mt-2">{item.title} </p>
              </div>
            </div>
          ))}
        </div>
        {progressBar}
      </section>
    </>
  );
};

export default ProjectRow;
