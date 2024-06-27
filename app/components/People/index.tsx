import Link from "next/link";
import GetdataUtama from "./getData";
import Title from "./title";

export interface dataCake {
  nameCake: string;
  image: string;
  description?: string;
}

async function getData(): Promise<dataCake[]> {
  const res = await fetch("http://localhost:3001/cake/kuetrue");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const People = async () => {
  const datas = await getData();

  return (
    <div id="product">
      <div className="mx-auto mt-14 max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center">
        <Title />
        <div className="grid gap-10 grid-cols-2 lg:gap-10 mt-20 lg:grid-cols-3">
          {datas.map((data, i: number) => {
            return (
              <GetdataUtama
                nameCake={data?.nameCake}
                image={data?.image}
                description={data.description}
                key={i}
              />
            );
          })}
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
