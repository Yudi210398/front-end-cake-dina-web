import Image from "next/image";
import Link from "next/link";
export default function Produk() {
  return (
    <div className="mx-auto mt-10 max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center">
      <div className="grid gap-10 grid-cols-2 lg:gap-10 mt-20 lg:grid-cols-3">
        <div className=" bg-black-500 aspect-square rounded-lg  justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/assets/cake/Resep-Kue-Cucur-Gula-Merah-Anti-Gagal-Dijamin-Legit-Bikin-Ketagihan-1024x678.jpg"
                alt=""
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
