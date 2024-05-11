import { useState } from "react";
import Serviceimage from "../../../assets/mographtext.png";
import SmartphoneFrame from "../../../assets/squareframe.gif";
import Thumbnail1 from "../../../assets/thumbnail1.png";
import Thumbnail2 from "../../../assets/thumbnail2.png";
import Thumbnail3 from "../../../assets/thumbnail3.png";
import Thumbnail4 from "../../../assets/thumbnail4.png";
import Thumbnail5 from "../../../assets/thumbnail5.png";
import Thumbnail6 from "../../../assets/thumbnail6.png";
import Thumbnail7 from "../../../assets/thumbnail7.png";
// Ensure this path is correct
export function Vidgallery() {
  const data = [
    {
      videoid: "YwtkP-V4RVo",
      thumbnail: Thumbnail7,
    },
    {
      videoid: "ou1iMCUxFms",
      thumbnail: Thumbnail1,
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
    <div className="py-20 md:">
      <img
        src={Serviceimage}
        alt="after effects"
        className="mb-10 w-[250px]"
        id="motiongraphics"
      />
      <p className="text-left text-yellow-100">
        I work with animation, audio, and visual effects to create moving
        content and graphics for various media, such as television, the
        internet, and film. <br /> Motion graphic designers work with creative
        teams to incorporate design elements into a project.
      </p>
      <div className="py-10 flex flex-col items-center lg:flex-row justify-center lg:space-x-20 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 lg:mb-0">
          {data.map(({ videoid, thumbnail }, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(videoid)}
              className="rounded hover:bg-yellow shadow-glow"
              title={`Thumbnail for video ${videoid}`}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-[150px] h-[150px] object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
        <div
          className="relative w-full max-w-[525px] mx-auto lg:mx-0"
          style={{ height: "525px" }}
        >
          <img
            src={SmartphoneFrame}
            alt="Square Frame"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%]">
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
          </div>
        </div>
      </div>
    </div>
  );
}
