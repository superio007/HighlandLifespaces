"use client";
import BackgroundVideo from "next-video/background-video";
import PosterImage from "@/assets/PosterImage.webp";
import LocIcon from "@/assets/LocIcon.webp";
import FullScreenIcon from "@/assets/FullScreenIcon.webp";
import Image from "next/image";

const VideoShowcase = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        <BackgroundVideo
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={PosterImage}
          src="https://ik.imagekit.io/jamlkxwow/HIGHLAND%20MAYFIELDS%20-%20LOCATION.mp4"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top area (optional, can be left empty for clean look) */}
          <div></div>

          {/* Bottom area */}
          <div className="flex justify-between items-end w-full">
            {/* Left side icons */}
            <div className="flex items-center gap-3 backdrop-blur-md bg-white/10 p-3 ">
              <Image
                src={FullScreenIcon}
                alt="Full screen"
                width={20}
                height={20}
              />
              <Image src={LocIcon} alt="Location" width={20} height={20} />
            </div>

            {/* Right side info boxes */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-4 py-2 ">
                <span className="bg-white rounded-full w-2 h-2"></span>
                <span className="text-xs text-white uppercase tracking-wider">
                  Construction
                </span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-4 py-2 ">
                <span className="bg-white rounded-full w-2 h-2"></span>
                <span className="text-xs text-white uppercase tracking-wider">
                  Live Site
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
