"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Archivo_Black } from "next/font/google";
import { useHttp } from "../components/util/http-hook";
import { useEffectProduct } from "../components/util/http-get-all-Product";
import IndexProduct from "../components/produks";

const arvhivo = Archivo_Black({ weight: "400", subsets: ["latin"] });

export default function Produk() {
  const { getData } = useEffectProduct();

  return (
    <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center">
      <hr
        style={{ width: "100px", border: "1px solid navy", color: "blue" }}
        className=" mt-3 lg:col-span-1"
      />
      <div className="-mt-3">
        <span
          style={{ color: "#113065" }}
          className={`ml-32 mb-20 flex ${arvhivo.className}`}
        >
          SEMUA KUE
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        className="grid gap-10 grid-cols-2 lg:gap-10 mt-20 lg:grid-cols-3"
      >
        {getData.map((data, i) => (
          <IndexProduct key={i} nameCake={data.nameCake} image={data.image} />
        ))}
      </motion.div>
      <br />
    </div>
  );
}
