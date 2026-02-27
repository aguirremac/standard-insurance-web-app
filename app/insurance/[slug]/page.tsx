import InsuranceTypePage from "@/components/InsuranceTypePage";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Convert slug → readable title
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} Insurance`,
  };
}

export default function App() {
  return (
    <>
    <InsuranceTypePage />
    </>

  );
}
