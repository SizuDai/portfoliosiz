import { useState } from "react";
import { motion } from "framer-motion";
import SmartphoneFrame from "../../../assets/squareframe.png";
import Thumbnail1 from "../../../assets/thumbnail1.png";
import Thumbnail2 from "../../../assets/thumbnail2.png";
import Thumbnail3 from "../../../assets/thumbnail3.png";
import Thumbnail4 from "../../../assets/thumbnail4.png";
import Thumbnail5 from "../../../assets/thumbnail5.png";
import Thumbnail6 from "../../../assets/thumbnail6.png";
import Thumbnail7 from "../../../assets/thumbnail7.png";
import GamingText from "../../text/GamingText";
// Ensure this path is correct
export function Vidgallery() {
  const data = [
    {
      videoid: "ou1iMCUxFms",
      thumbnail: Thumbnail1,
    },
    {
      videoid: "YwtkP-V4RVo",
      thumbnail: Thumbnail7,
    },
    {
      videoid: "mYU9uEbjj8k",
      thumbnail: Thumbnail3,
    },
    {
      videoid: "EOvp9mzHxTU",
      thumbnail: Thumbnail4,
    },
    {
      videoid: "mhVuSwwKH4w",
      thumbnail: Thumbnail2,
    },
    {
      videoid: "MvTICb83V5w",
      thumbnail: Thumbnail5,
    },
    {
      videoid: "RsREyPxntb4",
      thumbnail: Thumbnail6,
    },
    // Add more video IDs and thumbnails as needed
  ];

  const [activeVideo, setActiveVideo] = useState(data[0].videoid);

  return (
    <div className="py-20">
      <div className="mb-2 p-4">
        <GamingText text="Motion Graphics" size="text-3xl" />
      </div>
      <motion.p
        className="text-left text-yellow-100 p-4 font-retro text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I work with animation, audio, and visual effects to create moving
        content and graphics for various media, such as television, the
        internet, and film. <br /> Motion graphic designers work with creative
        teams to incorporate design elements into a project.
      </motion.p>
      <div className="py-10 flex flex-col items-center lg:flex-row justify-center lg:space-x-20 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 lg:mb-0">
          {data.map(({ videoid, thumbnail }, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveVideo(videoid)}
              className="rounded hover:bg-yellow shadow-glow"
              title={`Thumbnail for video ${videoid}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-[150px] h-[150px] object-cover rounded-lg"
              />
            </motion.button>
          ))}
        </div>
        <motion.div
          className="relative w-full max-w-[525px] mx-auto lg:mx-0"
          style={{ height: "525px" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={SmartphoneFrame}
            alt="Square Frame"
            className="absolute top-0 left-0 w-full h-full"
          />
          <motion.div
            className="absolute top-[15%] left-[15%] w-[70%] h-[70%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1&loop=1&playlist=${activeVideo}`}
              className="rounded-xl"
              title="Embedded YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
