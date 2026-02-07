"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type QuoteButtonProps = {
  to?: string; // default to /quote
};

export function QuoteButton({ to = "/quote" }: QuoteButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <Button className="w-full rounded-full text-white" onClick={handleClick}>
      Get a Quote
    </Button>
  );
}
