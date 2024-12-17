import Image from "next/image";
import Link from "next/link";

const WhatsappIcon = () => {
  const encodePesan = encodeURIComponent("Halo Saya Mau Pesan Kue");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://wa.me/6281388155049?text=${encodePesan}`}
    >
      <Image
        src="/assets/logo/was.png"
        alt="whatsapp"
        width={"220"}
        height={"10"}
        sizes="100vw"
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        style={{
          width: "100",
          height: "auto",
          position: "fixed",
          zIndex: 1000,
          cursor: "pointer",
        }}
      />
    </a>
  );
};

export default WhatsappIcon;
