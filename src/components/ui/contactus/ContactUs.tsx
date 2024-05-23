import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../../assets/CONTACT US.png";
import Scroll from "../../../assets/basic_scroll_by_trulymalicious_dgccekt.gif";
import { useState } from "react";
import text2 from "../../../assets/WORK WITH ME.png";
import text3 from "../../../assets/WORK WITH ME 2.png";

const ContactUs = () => {
  const InputStyle = ` mb-5 w-full rounded-lg px-5 py-3 bg-gray-800 placeholder-yellow-200`;
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
    <section id="contact" className="mx-auto pt-24 pb-32 gray">
      <motion.div>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex">
            <img
              src={ContactUsPageGraphic}
              alt="Services Text"
              className="mb-5 w-64 md:w-48 lg:w-64"
              id="services"
            />
          </div>
          <p className="my-5 text-lg text-left">
            Loved My Works !!!
            <br />
            Fill up the form and let's create magic together.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
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
                <p className="mt-1 text-red-400">
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
                <p className="mt-1 text-red-400">
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
                <p className="mt-1 text-red-400">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <div className=" px-5 relative  align-middle inline-flex group">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-yellow-100 transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    {isHovered ? (
                      <img src={text3} alt="Hover Text" className="h-7" />
                    ) : (
                      <img src={text2} alt="Default Text" className="h-7" />
                    )}
                  </div>
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className=" ml-20 w-[300px]"
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
