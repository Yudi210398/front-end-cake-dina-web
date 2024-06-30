"use client";
import Image from "next/image";
import { Bad_Script } from "next/font/google";
import { motion } from "framer-motion";
import { Sora } from "next/font/google";

const sora = Sora({ weight: ["400"], subsets: ["latin"] });

interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}
export const bad = Bad_Script({ weight: ["400"], subsets: ["cyrillic"] });
const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/features/time.svg",
    heading: "Delivery",
    paragraph:
      "Manjakan dirimu dengan kue lezat tanpa harus keluar rumah! Kami siap mengantarkan kue favoritmu langsung ke pintu rumahmu. Pesan sekarang dan nikmati kenyamanan delivery! ",
  },
  {
    imgSrc: "/assets/features/signal.svg",
    heading: "Bahan Terbaik",
    paragraph:
      "Kue lezat dengan bahan terjamin dan bebas pengawet! Kami hanya menggunakan bahan berkualitas untuk menghadirkan rasa terbaik tanpa kompromi. Nikmati kue sehat dan enak setiap saat!",
  },
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "Harga Bersaing",
    paragraph:
      "Tidak perlu mahal untuk menikmati kue lezat dan berkualitas! Nikmati setiap gigitan dengan harga terjangkau. Dijamin enak dan bikin ketagihan!",
  },
];

const Features = () => {
  return (
    <div
      className="bg-babyblue"
      id="features"
      style={{ backgroundColor: "white" }}
    >
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <h4
            style={{ fontSize: "35px", fontStyle: "oblique" }}
            className={`${bad.className} text-4xl sm:text-5xl font-semibold text-black text-center my-10`}
          >
            KEUNGGULAN KAMI
          </h4>
          <hr
            style={{ border: "1px solid navy", color: "blue" }}
            className=" mx-auto w-20  border-1 -mt-2"
          />
        </motion.div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Image
              alt={"data"}
              src={"/assets/cake/karenaa.jpg"}
              width={"800"}
              height={"800"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="mb-2"
              style={{ width: 1000, borderRadius: "12px" }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 180 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="data sm:pt-32"
          >
            <h1
              className={`${sora.className} text-balck  text-base md:base   font-semibold  pt-5`}
              style={{
                fontSize: 35,
                fontWeight: "bold",
                lineHeight: 1.6,
              }}
            >
              Kelezatan Sejati: Kue Alami Tanpa Pengawet
            </h1>
            <br />
            <hr />
            <br />
            <p style={{ textAlign: "justify", fontSize: 20, lineHeight: 1.8 }}>
              Rasakan kebaikan murni dari setiap gigitan! Kue kami tidak hanya
              menggoda lidah dengan rasa yang otentik, tetapi juga memberikan
              kepuasan hati dengan bahan-bahan alami pilihan. Dibuat tanpa
              pengawet, setiap sentuhan tangan kami adalah cinta untuk kualitas
              dan kesegaran yang tak tertandingi. Hadirkan kelezatan sejati
              untuk menghadirkan kebahagiaan dalam setiap momen istimewa Anda!
            </p>
          </motion.div>

          {/* {Aboutdata.map((item, i) => (
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              key={i}
              className="bg-white rounded-2xl p-5 featureShadow"
            >
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={55}
                height={55}
                className="mb-2"
              />
              <h3 className="text-2xl font-semibold text-black mt-5">
                {item.heading}
              </h3>
              <h4 className="text-lg font-normal text-black opacity-50 my-2 text-justify">
                {item.paragraph}
              </h4>
              <br />
              <br />
              <br />
            </motion.div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Features;
