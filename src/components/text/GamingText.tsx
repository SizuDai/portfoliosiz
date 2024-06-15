import React from "react";

interface GamingTextProps {
  text: string;
  size?: string; // optional prop for custom text size
}

const GamingText: React.FC<GamingTextProps> = ({ text, size = "text-2xl" }) => {
  return (
    <div className={`relative inline-block font-bold font-retro ${size}`}>
      <span
        className="relative text-yellow-300"
        style={{
          textShadow: `
            -1px -1px 0 #b8860b,
            1px -1px 0 #b8860b,
            -1px 1px 0 #b8860b,
            1px 1px 0 #b8860b,
            -2px -2px 0 #8b6508,
            2px -2px 0 #8b6508,
            -2px 2px 0 #8b6508,
            2px 2px 0 #8b6508
          `,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default GamingText;
