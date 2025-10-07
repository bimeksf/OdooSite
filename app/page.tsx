import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import ProductSection from "@/components/sections/ProductSection";
import CircleSesction from "@/components/sections/CircleSesction";
import AdvantageSection from "@/components/sections/AdvantageSection";
import CoUmiCard from "@/components/CoUmiCard";
import CoUmiSection from "@/components/sections/CoUmiSection";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <Products/> */}
      <ProductSection/>
    <CircleSesction/>
    <AdvantageSection/>
    <CoUmiSection />
    </>
  );
}
