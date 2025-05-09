import FeatureProduct from "@/app/home/featureProduct";
import HeroSection from "@/app/home/heroSection";
import Popular from "@/app/home/popular";
export default function Home() {
  
  return (
    <div className="pt-16">
      <HeroSection />
      <Popular/>
      <FeatureProduct />
    </div>
  );
}
