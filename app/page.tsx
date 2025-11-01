import HeroBanner from "@/components/Home/HeroBanner";
import VideoShowcase from "@/components/Home/VideoShowcase";
import ConstructionProgress from "@/components/Home/ConstructionProgress";
import GallerySection from "@/components/Home/GallerySection";
import SustainabilitySection from "@/components/Home/SustainabilitySection";
import FAQSection from "@/components/Home/FAQSection";
function Home() {
  return (
    <>
      {/* <HeroBanner /> */}
      <VideoShowcase />
      <ConstructionProgress />
      <GallerySection />
      <SustainabilitySection />
      <FAQSection />
    </>
  );
}

export default Home;
