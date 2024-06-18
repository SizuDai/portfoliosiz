import { useState, useEffect } from "react";
import Thumbnail1 from "../../../assets/thumbnaillg1.png";
import Thumbnail2 from "../../../assets/thumbnaillg2.png";
import Thumbnail3 from "../../../assets/thumbnaillg3.png";
import Thumbnail4 from "../../../assets/thumbnaillg4.png";
import Thumbnail5 from "../../../assets/thumbnaillg5.png";
import { motion } from "framer-motion";
import GamingText from "../../text/GamingText";
import BackgroundImage from "../../../assets/animartionbg.svg"; // Your background image path

export function Gallery() {
  const data = [
    { videoid: "hTwOilfdebY", thumbnail: Thumbnail4 },
    { videoid: "k6V93CgWcOo", thumbnail: Thumbnail2 },
    { videoid: "UcWHXMuhczU", thumbnail: Thumbnail3 },
    { videoid: "n05veyp--AY", thumbnail: Thumbnail5 },
    { videoid: "6pjyjh3NVk4", thumbnail: Thumbnail1 },
  ];

  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "a") {
        setActiveVideo(
          (prevActiveVideo) => (prevActiveVideo + 1) % data.length
        );
      } else if (event.key === "b") {
        setActiveVideo(
          (prevActiveVideo) => (prevActiveVideo + data.length - 1) % data.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="mt-5">
      <div id="animations" className="flex flex-col items-center mb-20">
        <GamingText text="Gallery" size="text-3xl md:text-5xl" />
      </div>
      <div className="mb-2 p-4">
        <GamingText text="Animation" size="text-xl md:text-3xl" />
      </div>
      <p className=" text-yellow-100 mb-10 p-4 font-retro text-sm text-left md:text-xs">
        Using animation can help a brand convey a simple message or explain
        complex concepts in a cost-effective and visually appealing way.
        <br />
        Animation is very versatile and can be included in your marketing
        strategy in a number of ways,
        <br />
        from adding it to your website to a short brand animation in an email
        campaign. These are my works for the brands I have worked with.
      </p>
      <div className="flex flex-col items-center w-full mt-10">
        <motion.div
          className="relative w-full max-w-xl md:max-w-5xl"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="relative w-full h-48 md:h-80 lg:h-96">
            <img
              src={BackgroundImage}
              alt="Background"
              className="hidden lg:block absolute top-0 left-0 w-auto h-auto object-cover rounded-lg"
            />
            <iframe
              src={`https://www.youtube.com/embed/${data[activeVideo].videoid}?autoplay=1&mute=1&loop=1&playlist=${data[activeVideo].videoid}`}
              className="absolute top-[13%] left-[25%] w-[52%] h-[76%] rounded-lg object-cover"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        <div className="flex justify-center absolute w-full mt-48 md:mt-[345px] shadow-inner">
          {data.map(({ videoid, thumbnail }, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(index)}
              className="m-2 rounded overflow-hidden w-16 h-9 md:w-20 md:h-12"
              title={`Thumbnail for video ${videoid}`}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
