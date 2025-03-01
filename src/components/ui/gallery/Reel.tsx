import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiX,
} from "react-icons/fi";

const videoProjects = [
  {
    id: 1,
    category: "shorts-reels",
    title: "Animated Short (9:16)",
    videoId: "NtqJ2_3Rpa8",
  },
  {
    id: 2,
    category: "artworks",
    title: "Art Animation (9:16)",
    videoId: "qlOq-0qzOJw",
  },
  {
    id: 3,
    category: "animations",
    title: "VFX Showcase (9:16)",
    videoId: "X9CThBxdcS0",
  },
];

const categories = ["shorts-reels", "animations", "artworks", "digital-ads"];

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function VideoProject() {
  const [showVideoSection, setShowVideoSection] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [activeCategory, setActiveCategory] = useState("shorts-reels");
  const [selectedVideo, setSelectedVideo] = useState<{
    videoId: string;
  } | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  const previousActiveCategory = usePrevious(activeCategory);
  const filteredVideos = videoProjects.filter(
    (v) => v.category === activeCategory
  );

  const handleCategoryChange = (newCategory: string) => {
    const currentIndex = categories.indexOf(activeCategory);
    const newIndex = categories.indexOf(newCategory);
    setDirection(newIndex > currentIndex ? "right" : "left");
    setActiveCategory(newCategory);
    setScrollIndex(0);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const deltaX = touchStart.x - touch.clientX;
    const deltaY = touchStart.y - touch.clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > 50) {
        if (
          deltaX > 0 &&
          activeCategory !== categories[categories.length - 1]
        ) {
          handleCategoryChange(
            categories[categories.indexOf(activeCategory) + 1]
          );
        } else if (deltaX < 0 && activeCategory !== categories[0]) {
          handleCategoryChange(
            categories[categories.indexOf(activeCategory) - 1]
          );
        }
      }
    } else {
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && scrollIndex > 0) {
          setScrollDirection("up");
          setScrollIndex((prev) => prev - 1);
        } else if (deltaY < 0 && scrollIndex < filteredVideos.length - 1) {
          setScrollDirection("down");
          setScrollIndex((prev) => prev + 1);
        }
      }
    }
  };

  useEffect(() => {
    if (showVideoSection) {
      const timer = setTimeout(() => setShowGuide(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showVideoSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 5) {
        setScrollDirection("down");
        setScrollIndex((prev) => Math.min(prev + 1, filteredVideos.length - 1));
      } else if (e.deltaY < -5) {
        setScrollDirection("up");
        setScrollIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [filteredVideos]);

  // Disable scroll on the body when in the video section
  useEffect(() => {
    if (showVideoSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showVideoSection]);

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden"
      onTouchStart={(e) =>
        setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
      }
      onTouchEnd={handleTouchEnd}
    >
      {showVideoSection ? (
        <div>
          {/* Button to exit view profile */}
          <button
            onClick={() => setShowVideoSection(false)}
            className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full"
          >
            Exit
          </button>

          {/* Center Category Section */}
          <div className="absolute top-4 md:top-10 w-full flex justify-center z-10">
            <div className="bg-gray-800 rounded-full py-2 px-4">
              {/* Only show active category */}
              <button
                onClick={() => handleCategoryChange(activeCategory)}
                className="text-center text-white px-6 py-2 text-lg md:text-xl bg-yellow-500 rounded-full"
              >
                {activeCategory.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Video Guide Overlay */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-40"
                onClick={() => setShowGuide(false)}
              >
                <div className="text-center text-white space-y-8 p-4">
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome to My Profile!
                  </h2>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="flex items-center space-x-2 mb-2">
                        <FiArrowLeft className="text-3xl" />
                        <FiArrowRight className="text-3xl" />
                      </div>
                      <p>Swipe horizontally to change categories</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center space-x-2 mb-2">
                        <FiArrowUp className="text-3xl" />
                        <FiArrowDown className="text-3xl" />
                      </div>
                      <p>Swipe vertically to browse videos</p>
                    </div>
                  </div>
                  <p className="text-yellow-500 animate-pulse">
                    Tap anywhere to continue
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Video iframe */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${filteredVideos[scrollIndex]?.videoId}`}
              initial={{
                x:
                  previousActiveCategory !== activeCategory
                    ? direction === "right"
                      ? "100%"
                      : "-100%"
                    : 0,
                y:
                  previousActiveCategory === activeCategory
                    ? scrollDirection === "down"
                      ? "100%"
                      : "-100%"
                    : 0,
                opacity: 0,
              }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{
                x:
                  previousActiveCategory !== activeCategory
                    ? direction === "right"
                      ? "-100%"
                      : "100%"
                    : 0,
                y:
                  previousActiveCategory === activeCategory
                    ? scrollDirection === "down"
                      ? "-100%"
                      : "100%"
                    : 0,
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <iframe
                src={`https://www.youtube.com/embed/${filteredVideos[scrollIndex]?.videoId}?autoplay=1&mute=1&loop=1`}
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
          <button
            onClick={() => setShowVideoSection(true)}
            className="px-8 py-4 bg-yellow-500 text-black rounded-full text-xl font-bold hover:bg-yellow-400 transition-colors duration-300"
          >
            View Profile
          </button>
        </div>
      )}
    </div>
  );
}
