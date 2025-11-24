import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Scroll from "../../../assets/phonepixel.png";
import { useState } from "react";
import text2 from "../../../assets/WORK WITH ME.png";
import text3 from "../../../assets/WORK WITH ME 2.png";
import GamingText from "../../text/GamingText";

const ContactUs = () => {
  const InputStyle = `mb-5 w-full rounded-lg px-5 py-3 bg-gray-800 placeholder-yellow-200 font-display`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      id="contact"
      className="container mx-auto py-16 px-4 overflow-hidden"
    >
      <motion.div>
        {/* Header Section */}
        <motion.div
          className="w-full md:w-3/5 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mb-4 text-center">
            <GamingText text="Contact Me" size="text-3xl" />
          </div>
          <p className="mt-4 text-center text-yellow-1000 font-sans font-semibold text-base">
            Loved My Works !!!
            <br />
            Fill up the form and let's create magic together.
          </p>
        </motion.div>

        {/* Form & Graphic */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Form Section */}
          <motion.div
            className="w-full md:basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/8c45e22c04cd4526c92993dc4118e820"
              method="POST"
            >
              <input
                className={InputStyle}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 font-display">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                className={InputStyle}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 font-display">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className={InputStyle}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-400 font-display">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-yellow-100 transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  {isHovered ? (
                    <img src={text3} alt="Hover Text" className="h-7" />
                  ) : (
                    <img src={text2} alt="Default Text" className="h-7" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Graphic Section */}
          <motion.div
            className="w-full md:basis-2/5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative">
              <img
                className="mx-auto w-[400px]"
                alt="Contact Us Page Graphic"
                src={Scroll}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
