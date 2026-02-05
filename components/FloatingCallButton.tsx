'use client';

const PHONE_NUMBER = "+639171234567"; // replace with your actual number

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        gap-2
        bg-orange-500
        hover:bg-orange-600
        text-white
        font-bold
        rounded-full
        px-5
        py-3
        shadow-lg
        transition-colors
        md:hidden
      "
      aria-label="Call Us"
    >
      📞 Call
    </a>
  );
}
