import Image from "next/image";
import Link from "next/link";

const People = () => {
  return (
    <div id="product">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20">
          <div className="col-span-6 flex justify-center">
            <Image
              src="/assets/people/testimony.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
              More than 100k+ people are using our product.
            </h1>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </h3>
            <Link
              href={"/"}
              className="text-electricblue text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0"
            >
              Learn more{" "}
              <Image
                src="/assets/people/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
            </Link>
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  src="/assets/cake/Resep-Kue-Cucur-Gula-Merah-Anti-Gagal-Dijamin-Legit-Bikin-Ketagihan-1024x678.jpg"
                  alt="star-image"
                  width={700}
                  height={200}
                  className=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
