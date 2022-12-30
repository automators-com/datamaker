import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { draw } from "../../utilities/draw";

export default function SignUp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-t
     from-[#459CA7] to-[#482B7C] py-20 px-10 text-lg lg:py-28 lg:text-2xl xl:py-28 xl:text-2xl"
    >
      <p className="max-w-[24em] text-center">
        <span className="text-[#EBFF00]">Sign Up Today</span> To Create, Manage,
        and Monitor Your Test Data Sets Seamlessly for a Truly Streamlined
        Development Process!
      </p>
      <Link href={`/signup`}>
        <button className="my-14 rounded-full bg-[#EBFF00] px-10 py-3 text-base font-medium text-black hover:bg-[#08FFB3] lg:my-20 xl:my-20">
          Start Making Data
        </button>
      </Link>
      <div className="relative h-20 w-full object-contain">
        <motion.svg
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : undefined}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2017.044 70.88"
        >
          <motion.g
            id="Group_407"
            data-name="Group 407"
            transform="translate(23.253 -12348.81)"
          >
            <motion.g
              id="Group_338"
              data-name="Group 338"
              transform="translate(405.625 12388.469) rotate(-90)"
            >
              <motion.rect
                variants={draw(0.3)}
                id="Rectangle_16"
                data-name="Rectangle 16"
                width="84.381"
                height="8.438"
                rx="4.219"
                transform="translate(0 344.696) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.1)}
                id="Rectangle_19"
                data-name="Rectangle 19"
                width="200.405"
                height="8.438"
                rx="4.219"
                transform="translate(0 200.405) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.4)}
                id="Rectangle_17"
                data-name="Rectangle 17"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 391.527) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.5)}
                id="Rectangle_22"
                data-name="Rectangle 22"
                width="8.438"
                height="8.438"
                rx="4.219"
                transform="translate(0 413.044) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.6)}
                id="Rectangle_23"
                data-name="Rectangle 23"
                width="8.438"
                height="8.438"
                rx="4.219"
                transform="translate(0 493.628) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.2)}
                id="Rectangle_18"
                data-name="Rectangle 18"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 247.236) rotate(-90)"
                fill="#fff"
              />
            </motion.g>
            <motion.g
              id="Group_339"
              data-name="Group 339"
              transform="translate(-23.253 12419.689) rotate(-90)"
            >
              <motion.rect
                variants={draw(0.1)}
                id="Rectangle_16-2"
                data-name="Rectangle 16"
                width="84.381"
                height="8.438"
                rx="4.219"
                transform="translate(0 344.696) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.2)}
                id="Rectangle_19-2"
                data-name="Rectangle 19"
                width="200.405"
                height="8.438"
                rx="4.219"
                transform="translate(0 200.405) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.3)}
                id="Rectangle_17-2"
                data-name="Rectangle 17"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 391.527) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.4)}
                id="Rectangle_22-2"
                data-name="Rectangle 22"
                width="8.438"
                height="8.438"
                rx="4.219"
                transform="translate(0 413.044) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.5)}
                id="Rectangle_18-2"
                data-name="Rectangle 18"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 247.236) rotate(-90)"
                fill="#fff"
              />
            </motion.g>
            <motion.g
              id="Group_341"
              data-name="Group 341"
              transform="translate(1580.747 12419.689) rotate(-90)"
            >
              <motion.rect
                variants={draw(0.3)}
                id="Rectangle_16-3"
                data-name="Rectangle 16"
                width="84.381"
                height="8.438"
                rx="4.219"
                transform="translate(0 344.696) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.1)}
                id="Rectangle_19-3"
                data-name="Rectangle 19"
                width="200.405"
                height="8.438"
                rx="4.219"
                transform="translate(0 200.405) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.4)}
                id="Rectangle_17-3"
                data-name="Rectangle 17"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 391.527) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.5)}
                id="Rectangle_22-3"
                data-name="Rectangle 22"
                width="8.438"
                height="8.438"
                rx="4.219"
                transform="translate(0 413.044) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.2)}
                id="Rectangle_18-3"
                data-name="Rectangle 18"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 247.236) rotate(-90)"
                fill="#fff"
              />
            </motion.g>
            <motion.g
              id="Group_340"
              data-name="Group 340"
              transform="translate(490.415 12348.81) rotate(90)"
            >
              <motion.rect
                variants={draw(0.1)}
                id="Rectangle_16-4"
                data-name="Rectangle 16"
                width="84.381"
                height="8.438"
                rx="4.219"
                transform="translate(0 344.696) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.2)}
                id="Rectangle_19-4"
                data-name="Rectangle 19"
                width="200.405"
                height="8.438"
                rx="4.219"
                transform="translate(0 200.405) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.3)}
                id="Rectangle_17-4"
                data-name="Rectangle 17"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 391.527) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.3)}
                id="Rectangle_22-4"
                data-name="Rectangle 22"
                width="8.438"
                height="8.438"
                rx="4.219"
                transform="translate(0 413.044) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.4)}
                id="Rectangle_23-2"
                data-name="Rectangle 23"
                width="8.438"
                height="8.438"
                rx="4.219"
                transform="translate(0 493.628) rotate(-90)"
                fill="#fff"
              />
              <motion.rect
                variants={draw(0.5)}
                id="Rectangle_18-4"
                data-name="Rectangle 18"
                width="33.752"
                height="8.438"
                rx="4.219"
                transform="translate(0 247.236) rotate(-90)"
                fill="#fff"
              />
            </motion.g>
            <motion.rect
              variants={draw(0.4)}
              id="Rectangle_19-5"
              data-name="Rectangle 19"
              width="200.405"
              height="8.438"
              rx="4.219"
              transform="translate(1339.011 12348.81)"
              fill="#fff"
            />
            <motion.rect
              variants={draw(0.2)}
              id="Rectangle_17-5"
              data-name="Rectangle 17"
              width="33.752"
              height="8.438"
              rx="4.219"
              transform="translate(1116.888 12348.81)"
              fill="#fff"
            />
            <motion.rect
              variants={draw(0.1)}
              id="Rectangle_23-3"
              data-name="Rectangle 23"
              width="8.438"
              height="8.438"
              rx="4.219"
              transform="translate(1014.787 12348.81)"
              fill="#fff"
            />
            <motion.rect
              variants={draw(0.3)}
              id="Rectangle_18-5"
              data-name="Rectangle 18"
              width="33.752"
              height="8.438"
              rx="4.219"
              transform="translate(1261.179 12348.81)"
              fill="#fff"
            />
          </motion.g>
        </motion.svg>
      </div>
    </section>
  );
}
