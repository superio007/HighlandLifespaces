import HeroBanner from "@/components/Home/HeroBanner";
import VideoShowcase from "@/components/Home/VideoShowcase";
import ConstructionProgress from "@/components/Home/ConstructionProgress";
import GallerySection from "@/components/Home/GallerySection";
import SustainabilitySection from "@/components/Home/SustainabilitySection";
import FAQSection from "@/components/Home/FAQSection";
import ContactSection from "@/components/Home/ContactSection";
import AmenitiesShowcase from "@/components/Home/AmenitiesShowcase";
import FloorPlanShowcase from "@/components/Home/FloorPlanShowcase";
function Home() {
  return (
    <>
      {/* <HeroBanner /> */}

      <VideoShowcase />
      <AmenitiesShowcase />
      <FloorPlanShowcase />
      <ConstructionProgress />
      <GallerySection />
      <SustainabilitySection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

export default Home;
