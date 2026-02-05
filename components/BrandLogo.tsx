import Image from "next/image";

export default function BrandLogo({ height = 60, width = 200, color= "light" }) {

  return (
      <Image
        src={color === "light" ? "/brandlogo-dark.png" : "/brandlogo-light.png"}
        alt="Logo"
        className=""
        priority
        height={height}
        width={width}
      />
  );
}
