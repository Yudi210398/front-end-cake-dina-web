"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

async function getData() {
  const res = await fetch("http://localhost:3001/cake/kuetrue");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface dataCake {
  name: string;
  image: string;
}

const kueData: dataCake[] = [
  {
    name: "Kue Cucur Gula Merah",
    image:
      "/assets/cake/Resep-Kue-Cucur-Gula-Merah-Anti-Gagal-Dijamin-Legit-Bikin-Ketagihan-1024x678.jpg",
  },

  {
    name: "Dadar Gulung",
    image: "/assets/cake/foto_utama_dadar_gulung.jpg",
  },

  {
    name: "Marble Cake",
    image: "/assets/cake/marbleCake.jpg",
  },
];

// eslint-disable-next-line @next/next/no-async-client-component
const People = async () => {
  const data = await getData();
  console.log(data, `uhuy`);
  return (
    <div id="product">
      <div className="mx-auto mt-14 max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
            MACAM - MACAM KUE
          </h3>
          <hr
            style={{ border: "1px solid navy", color: "blue" }}
            className=" mx-auto w-20 border-1 -mt-2"
          />
        </motion.div>

        <div className="grid gap-10 grid-cols-2 lg:gap-10 mt-20 lg:grid-cols-3">
          {kueData.map((data, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              className=" bg-black-500 aspect-square rounded-lg  justify-center"
            >
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={data.image}
                    alt=""
                    width={800}
                    height={200}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.name}
                    </h5>
                  </a>
                  <br />
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 grid-cols-2 lg:gap-10 mt-10 lg:grid-cols-1">
          <Link
            href="/produk"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-center"
          >
            Semua Kue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default People;
