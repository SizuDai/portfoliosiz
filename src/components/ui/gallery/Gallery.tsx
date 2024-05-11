import React, { useState } from "react";
import Serviceimage from "../../../assets/animationtext.png";
import Seperateimage from "../../../assets/seperation.png";
import Thumbnail1 from "../../../assets/thumbnaillg1.png";
import Thumbnail2 from "../../../assets/thumbnaillg2.png";
import Thumbnail3 from "../../../assets/thumbnaillg3.png";
import Thumbnail4 from "../../../assets/thumbnaillg4.png";
import Thumbnail5 from "../../../assets/thumbnaillg5.png";

export function Gallery() {
  const data = [
    { videoid: "hTwOilfdebY", thumbnail: Thumbnail4 },
    { videoid: "k6V93CgWcOo", thumbnail: Thumbnail2 },
    { videoid: "UcWHXMuhczU", thumbnail: Thumbnail3 },
    { videoid: "n05veyp--AY", thumbnail: Thumbnail5 },
    { videoid: "6pjyjh3NVk4", thumbnail: Thumbnail1 },
  ];

  const [activeVideo, setActiveVideo] = useState(data[0].videoid);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className=" py-20">
      <img
        src={Seperateimage}
        alt="Separation"
        className=" flex m-auto h-60"
        id="animations"
      />
      <img
        src={Serviceimage}
        alt="After Effects"
        className="mb-10 w-64 md:w-48 lg:w-64"
        id="services"
      />
      <p className="text-left text-yellow-100 mb-10">
        Using animation can help a brand convey a simple message or explain
        complex concepts in a cost-effective and visually appealing way.
        <br />
        Animation is very versatile and can be included in your marketing
        strategy in a number of ways,
        <br />
        from adding it to your website to a short brand animation in an email
        campaign. These are my works for the brands i have work with.
      </p>
      <div className="flex flex-col items-center w-full mt-10">
        <div className="w-full max-w-5xl">
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1&loop=1&playlist=${activeVideo}`}
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {data.map(({ videoid, thumbnail }, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(videoid)}
              className="m-2 rounded overflow-hidden w-24 h-14 md:w-20 md:h-12"
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
