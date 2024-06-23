import Image from "next/image";

const DetailProduk = () => {
  return (
    <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center">
      <div className="grid grid-cols-2 gap-4 justify-center">
        <div>
          <Image
            className="rounded-t-lg"
            src={
              "https://res.cloudinary.com/dymv3cmhq/image/upload/v1718796438/dummy/lxhwtfjwbps3kfofbbn0.jpg"
            }
            alt="data"
            width={1000}
            height={300}
          />
        </div>

        <div>09</div>
      </div>
    </div>
  );
};
export default DetailProduk;
