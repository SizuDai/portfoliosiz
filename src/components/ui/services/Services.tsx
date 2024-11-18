import Image2 from "../../../assets/motiongraphics.png";
import Image3 from "../../../assets/graphicsassets.png";
import Image4 from "../../../assets/characteranimation.png";
import Image5 from "../../../assets/logodesignassets.png";
import Image6 from "../../../assets/Vfxservice.png";
import { motion } from "framer-motion";
import GamingText from "../../text/GamingText";
export function Services() {
  return (
    <motion.div
      className=" mt-5 mb-20"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="">
        <GamingText text="Services" size="text-3xl" />
      </div>
      <p className="mt-5 text-left text-yellow-1000 font-hind font-semibold text-base">
        Captivating Visual Content Creation
        <br />
        <span className="font-bold size-2">
          Motion Graphics | Graphic Design | VFX | Character Explainers | Video
          Editing
        </span>
        <br />
        As a versatile creative professional, I specialize in crafting visually
        stunning content to elevate your brand and captivate your audience.
        Contact me to unlock the power of visuals and achieve your goals.
        <br />I also provide services related to thumbnail design, viral shorts
        edits.
      </p>
      <section className="bg-transparent align-middle py-5">
        <motion.div
          className="py-2 mx-auto max-w-screen-xl"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-transparenth-auto md:h-full flex flex-col">
              <a
                href="#motiongraphic"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow"
              >
                <img
                  src={Image2}
                  alt="Motion Graphics"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-strong-vignette"></div>
                <h3 className="font-retro z-10 text-xs text-yellow-100 absolute top-0 left-0 p-4 xs:text-sm md:text-sm">
                  Motion Graphics
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-transparent">
              <a
                href="#animations"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={Image4}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className=" font-retro z-10 text-xs  text-yellow-100 absolute top-0 left-0 p-4 xs:text-sm md:text-sm">
                  Character Animation
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href="#vfx"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={Image6}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className=" font-retro z-10 text-xs  text-blue-100 absolute top-0 left-0 p-4 xs:text-sm md:text-sm">
                    VFX
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={Image5}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className=" font-retro z-10 text-xs  text-yellow-100 absolute top-0 left-0 p-4 xs:text-sm md:text-sm">
                    Logo Design
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1bg-transparenth-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={Image3}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className=" font-retro z-10 text-xs  text-yellow-100 absolute top-0 left-0 p-4 xs:text-sm md:text-sm">
                  Graphics Design
                </h3>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
