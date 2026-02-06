import Image from "next/image";


interface IBrandLogoProps {
    height?: number;
    width?: number;
    color?: "light" | "dark";
    onClick?: () => void;
}

export default function BrandLogo({ height = 60, width = 200, color= "light", onClick } : IBrandLogoProps) {

  return (
      <Image
        src={color === "light" ? "/brandlogo-dark.png" : "/brandlogo-light.png"}
        alt="Logo"
        className=""
        priority
        height={height}
        width={width}
        onClick={onClick}
      />
  );
}
