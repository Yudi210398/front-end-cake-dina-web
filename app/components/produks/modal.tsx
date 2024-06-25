import React from "react";
import { Datakue } from "../util/http-get-all-Product";
import Image from "next/image";
import { motion } from "framer-motion";
const ModalProduck: React.FC<Datakue> = ({
  data,
  setData,
  nameCake,
  image,
  description,
}) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${data} overflow-y-auto overflow-x fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50 `}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full   m-auto">
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {nameCake.toLocaleUpperCase()}
            </h3>
            <button
              onClick={() => (setData ? setData("hidden") : "hidden")}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <Image
              className="rounded-t-lg"
              src={image}
              alt="data"
              width={800}
              height={200}
            />
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => (setData ? setData("hidden") : "hidden")}
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Keluar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModalProduck;
