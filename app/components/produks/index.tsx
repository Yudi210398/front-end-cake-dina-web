import Image from "next/image";
import React from "react";
import { Datakue } from "../util/http-get-all-Product";
import Link from "next/link";

const IndexProduct: React.FC<Datakue> = ({ nameCake, image, id }) => {
  return (
    <div className=" bg-black-500 aspect-square rounded-lg  justify-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={`/produk/${id}`}>
          <Image
            className="rounded-t-lg"
            src={image}
            alt="data"
            width={800}
            height={200}
          />
        </Link>
        <div className="p-5">
          <Link href={`/produk/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {nameCake}
            </h5>
          </Link>
          <br />
          <Link
            href={`/produk/${id}`}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexProduct;
