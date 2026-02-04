import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function BrandLogo({ height = 60, width = 200 }) {
  const { theme } = useTheme();

  return (
    <div className={`w-[${width}px] h-[${height}px] relative`}>
      <Image
        src="/brandlogo-light.png"
        alt="Logo"
        className={`block ${theme === "dark" ? "hidden" : "block"} object-contain`}
        fill
        priority
      />
      <Image
        src="/brandlogo-dark.png"
        alt="Logo"
        className={`block ${theme === "dark" ? "block" : "hidden"} object-contain`}
        fill
        priority
      />
    </div>
  );
}
