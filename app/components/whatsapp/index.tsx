import Image from "next/image";

const WhatsappIcon = () => {
  return (
    <Image
      src="/assets/logo/was.png"
      alt="whatsapp"
      width={"220"}
      height={"10"}
      sizes="100vw"
      className="absolute top-[820px] right-[40px]"
      style={{
        width: "100",
        height: "auto",
        position: "fixed",
        zIndex: 1000,
        cursor: "pointer",
      }}
    />
  );
};

export default WhatsappIcon;
