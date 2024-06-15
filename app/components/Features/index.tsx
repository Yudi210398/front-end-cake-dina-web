"use client";
import Image from "next/image";
import { motion } from "framer-motion";
interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

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
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
            KEUNGGULAN KAMI
          </h3>
          <hr
            style={{ border: "1px solid navy", color: "blue" }}
            className=" mx-auto w-20  border-1 -mt-2"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {Aboutdata.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
