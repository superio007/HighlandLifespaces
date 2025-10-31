import Image from "next/image";
import HeroBannerImg from "@/assets/HeroBanner.webp";
import BannerBuildingImg from "@/assets/BannerBuilding.png";

const HeroBanner = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src={HeroBannerImg}
        alt="Hero Banner"
        fill
        priority
        className="object-cover object-center bg-black/80 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 py-12 flex items-center justify-center h-full">
        <div></div>
        <div>
          <Image src={BannerBuildingImg} alt="Banner Building" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
