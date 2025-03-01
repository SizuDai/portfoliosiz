import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import GamingText from "../../text/GamingText";
import { videoData, categories, CategoryProjects, Project } from "../videoData";

declare global {
  interface Window {
    YT: typeof YT | undefined;
  }
}

interface ErrorState {
  [key: number]: boolean;
}

export function VideoProjects() {
  // Set initial active category (change as desired)
  const [activeCategory, setActiveCategory] = useState<string>("shorts-reels");
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorState>({});

  // Look up the data for the currently selected category.
  const activeCategoryData: CategoryProjects | undefined = videoData.find(
    (group) => group.category === activeCategory
  );
  const projects: Project[] = activeCategoryData
    ? activeCategoryData.projects
    : [];

  // Load YouTube API script
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    return () => {
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.removeChild(tag);
      }
    };
  }, []);

  // Reset the selected video when switching categories.
  useEffect(() => {
    setSelectedVideo(null);
  }, [activeCategory]);

  const handleThumbnailClick = (project: Project) => {
    setSelectedVideo(project);
    setLoading(true);
    setErrors((prev) => ({ ...prev, [project.id]: false }));
  };

  const handleVideoLoad = (id: number) => {
    setLoading(false);
    setErrors((prev) => ({ ...prev, [id]: false }));
  };

  const handleVideoError = (id: number) => {
    setLoading(false);
    setErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Navigation: Go to the next video in the active category.
  const handleNextVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = projects.findIndex(
      (proj) => proj.id === selectedVideo.id
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedVideo(projects[nextIndex]);
    setLoading(true);
  };

  // Navigation: Go to the previous video.
  const handlePrevVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = projects.findIndex(
      (proj) => proj.id === selectedVideo.id
    );
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedVideo(projects[prevIndex]);
    setLoading(true);
  };

  // Allow keyboard navigation (Arrow keys and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedVideo) {
        if (e.key === "ArrowRight") handleNextVideo();
        if (e.key === "ArrowLeft") handlePrevVideo();
        if (e.key === "Escape") setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo, projects]);

  // Optional: header style mapping for each category (customize as desired)

  return (
    <motion.div
      id="projects"
      className="container mx-auto mt-20 mb-40 px-6 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Main Title */}
      <div className="mb-12 text-center">
        <GamingText text="Video Projects" size="text-3xl" />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-retro text-sm transition-colors border border-transparent ${
              activeCategory === cat
                ? "bg-yellow-1000 text-yellow-500 shadow-md"
                : "bg-gray-800 text-yellow-100 hover:text-yellow-400 hover:bg-gray-500"
            }`}
          >
            {cat.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleThumbnailClick(project)}
            className={`relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 ${
              project.type === "shorts" ? "aspect-[9/16]" : "aspect-video"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={() => handleVideoError(project.id)}
            />
            {errors[project.id] && (
              <div className="absolute inset-0 bg-red-900/50 flex items-center justify-center p-4">
                <span className="text-white text-center">
                  Failed to load video preview
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="font-retro text-yellow-100 text-lg">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">
                {activeCategory.replace("-", " ").toUpperCase()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {selectedVideo.type === "normal" ? (
            // For 16:9 videos
            <div className="relative bg-black rounded-lg shadow-2xl w-full max-w-4xl mx-auto p-6">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-yellow-1000 z-50 transition-all"
              >
                <FiX size={32} />
              </button>

              {projects.length > 1 && (
                <>
                  <button
                    onClick={handlePrevVideo}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-yellow-1000 transition-all disabled:opacity-50"
                  >
                    <FiArrowLeft size={40} />
                  </button>
                  <button
                    onClick={handleNextVideo}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-yellow-1000 transition-all disabled:opacity-50"
                  >
                    <FiArrowRight size={40} />
                  </button>
                </>
              )}

              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-1000" />
                </div>
              )}

              {errors[selectedVideo.id] ? (
                <div className="bg-red-900/50 p-8 rounded-lg text-center">
                  <p className="text-white mb-4">Failed to load video</p>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="bg-yellow-1000 text-black px-4 py-2 rounded-full"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="relative aspect-video bg-black">
                  <iframe
                    key={selectedVideo.id}
                    id="ytplayer"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&mute=1&enablejsapi=1`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleVideoLoad(selectedVideo.id)}
                    onError={() => handleVideoError(selectedVideo.id)}
                  />
                </div>
              )}
            </div>
          ) : (
            // For vertical (9:16) videos
            <div
              className="relative bg-black rounded-lg shadow-2xl mx-auto p-4"
              style={{
                height: "90vh",
                width: "calc(90vh * 9 / 16)",
              }}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-yellow-1000 z-50 transition-all"
              >
                <FiX size={32} />
              </button>

              {projects.length > 1 && (
                <>
                  <button
                    onClick={handlePrevVideo}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-yellow-1000 transition-all disabled:opacity-50"
                  >
                    <FiArrowLeft size={40} />
                  </button>
                  <button
                    onClick={handleNextVideo}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-yellow-1000 transition-all disabled:opacity-50"
                  >
                    <FiArrowRight size={40} />
                  </button>
                </>
              )}

              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-1000" />
                </div>
              )}

              {errors[selectedVideo.id] ? (
                <div className="bg-red-900/50 p-8 rounded-lg text-center">
                  <p className="text-white mb-4">Failed to load video</p>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="bg-yellow-1000 text-black px-4 py-2 rounded-full"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <iframe
                  key={selectedVideo.id}
                  id="ytplayer"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&mute=1&enablejsapi=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoLoad(selectedVideo.id)}
                  onError={() => handleVideoError(selectedVideo.id)}
                />
              )}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
