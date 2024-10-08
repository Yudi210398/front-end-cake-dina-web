"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-header">
      <br />

      <div className="mx-auto max-w-6xl pt-20 sm:pb-24 px-6">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-12">
          <div className="col-span-12 flex flex-col justify-evenly relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/assets/banner/star.svg"
                alt="star-image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100px", height: "auto" }}
              />
              <h1 className=" text-white  text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5">
                Kue Istimewa Untuk Momen Istimewa.
              </h1>
              <h3
                style={{
                  fontSize: 20,
                  lineHeight: 1.8,
                  color: "white",
                  textAlign: "justify",
                }}
                className=" text-grey500  opacity-75 text-lg font-normal text-center lg:text-justify pt-8"
              >
                Kami berkomitmen untuk menghadirkan kue terbaik bagi Anda.
                Setiap kue dibuat dengan perhatian dan dedikasi tinggi,
                memastikan setiap potongan menawarkan rasa yang memuaskan dan
                menggugah selera. Segera pesan dan nikmati kelezatan yang kami
                tawarkan!
              </h3>

              <div className="pt-24 mx-auto lg:mx-0">
                <Link
                  href={"/produk"}
                  className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-dodgerblue hover:text-white hover:bg-blue"
                >
                  Lihat Produk
                </Link>
                <br />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
