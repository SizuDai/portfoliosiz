import { useEffect, useRef } from "react";
import projectvid from "../../../assets/projectvid.mp4";

const ScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleScroll = () => {
      if (!video.duration) return;

      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const start = containerTop - viewportHeight;
      const end = containerTop + containerHeight;

      const currentScroll = window.scrollY;
      let progress = (currentScroll - start) / (end - start);
      progress = Math.min(Math.max(progress, 0), 1);

      video.currentTime = video.duration * progress;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gray-100"
      style={{ paddingTop: "31.25%" }}
    >
      <video
        ref={videoRef}
        src={projectvid}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        preload="auto"
      />
    </div>
  );
};

export default ScrollVideo;
