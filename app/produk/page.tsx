"use client";
import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import { useHttp } from "../components/util/http-hook";
import { useEffectProduct } from "../components/util/http-get-all-Product";

const arvhivo = Archivo_Black({ weight: "400", subsets: ["latin"] });

enum Category {
  KUE_KERING = "KUE_KERING",
  KUE_BASAH = "KUE_BASAH",
}

interface Datakue {
  namaKue: string;
  quantity: number;
  nameCake: string;
  price: number;
  image: string;
  description: string;
  category: Category;
  create_at: string;
}

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

      <div className="grid gap-10 grid-cols-2 lg:gap-10 mt-20 lg:grid-cols-3">
        <div className=" bg-black-500 aspect-square rounded-lg  justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src={getData[0]?.image}
                alt="data"
                width={800}
                height={200}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kue Cucur Gula Merah
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
        </div>
      </div>
      <br />
    </div>
  );
}
