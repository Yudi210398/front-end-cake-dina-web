import Image from "next/image";
import Link from "next/link";

const WhatsappIcon = () => {
  const encodePesan = encodeURIComponent("Halo Saya Mau Pesan Kue");
  return (
    <Link
      href={`https://wa.me/6281388155049?text=${encodePesan}`}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <a>
        <Image
          src="/assets/logo/was.png"
          alt="whatsapp"
          width={220}
          height={10}
          sizes="100vw"
          className="fixed bottom-4 right-4 z-50 cursor-pointer"
        />
      </a>
    </Link>
  );
};

export default WhatsappIcon;
