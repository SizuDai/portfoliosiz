import Image2 from "../../../assets/motiongraphics.png";
import Image3 from "../../../assets/graphicsassets.png";
import Image4 from "../../../assets/characteranimation.png";
import Image5 from "../../../assets/logodesignassets.png";
import Image6 from "../../../assets/Vfxservice.png";
import { motion } from "framer-motion";
import GamingText from "../../text/GamingText";
export function Services() {
  return (
    <div className="mt-8 mb-24 text-center px-6" id="services">
      {/* Title */}
      <div className="mb-6">
        <GamingText text="Services" size="text-4xl font-bold" />
      </div>

      {/* Description */}
      <p className="text-yellow-1000 font-hind font-medium text-lg leading-relaxed max-w-3xl mx-auto mb-12">
        Captivating Visual Content Creation
        <br />
        <span className="font-bold text-xl">
          Motion Graphics | Graphic Design | VFX | Character Explainers | Video
          Editing
        </span>
        <br />
        As a versatile creative professional, I specialize in crafting visually
        stunning content to elevate your brand and captivate your audience.
        Contact me to unlock the power of visuals and achieve your goals.
        <br />I also provide services related to **thumbnail design, viral
        shorts edits.**
      </p>

      {/* Services Grid */}
      <section className="bg-transparent py-8">
        <motion.div
          className="py-2 mx-auto max-w-screen-xl"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 flex flex-col">
              <a
                href="#motiongraphic"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow text-center"
              >
                <img
                  src={Image2}
                  alt="Motion Graphics"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-strong-vignette"></div>
                <h3 className="font-retro z-10 text-sm text-yellow-100 absolute top-4 left-1/2 transform -translate-x-1/2">
                  Motion Graphics
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 flex flex-col">
              <a
                href="#animations"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 text-center"
              >
                <img
                  src={Image4}
                  alt="Character Animation"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="font-retro z-10 text-sm text-yellow-100 absolute top-4 left-1/2 transform -translate-x-1/2">
                  Character Animation
                </h3>
              </a>

              <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mt-6">
                <a
                  href="#vfx"
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 text-center"
                >
                  <img
                    src={Image6}
                    alt="VFX"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="font-retro z-10 text-sm text-blue-100 absolute top-4 left-1/2 transform -translate-x-1/2">
                    VFX
                  </h3>
                </a>

                <a
                  href="#logodesign"
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 text-center"
                >
                  <img
                    src={Image5}
                    alt="Logo Design"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="font-retro z-10 text-sm text-yellow-100 absolute top-4 left-1/2 transform -translate-x-1/2">
                    Logo Design
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-1 flex flex-col">
              <a
                href="#graphicsdesign"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 text-center"
              >
                <img
                  src={Image3}
                  alt="Graphics Design"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="font-retro z-10 text-sm text-yellow-100 absolute top-4 left-1/2 transform -translate-x-1/2">
                  Graphics Design
                </h3>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
