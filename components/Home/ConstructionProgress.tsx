import BackgroundVideo from "next-video/background-video";

type Card = {
  title: string;
  status: string;
  image: string; // Use a /public path or remote URL
  backVideo: string;
  alt?: string;
};

const CARDS: Card[] = [
  {
    title: "Mayfield’s C pocket",
    status: "Basement completed",
    image: "https://ik.imagekit.io/jamlkxwow/Rectangle%204435.png", // replace with your image
    backVideo: "https://ik.imagekit.io/jamlkxwow/fixed.mp4_preview.mov",
    alt: "Mayfield’s C pocket construction",
  },
  {
    title: "Highland Industrial City",
    status: "Possession started",
    image: "https://ik.imagekit.io/jamlkxwow/Rectangle%204435%20(1).png", // replace with your image
    backVideo: "https://ik.imagekit.io/jamlkxwow/fixed.mp4_preview%20(1).mov",
    alt: "Highland Industrial City construction",
  },
  {
    title: "Highland Luxuria",
    status: "Possession started",
    image: "https://ik.imagekit.io/jamlkxwow/Rectangle%204435%20(2).png", // replace with your image
    backVideo: "https://ik.imagekit.io/jamlkxwow/fixed.mp4_preview%20(2).mov",
    alt: "Highland Luxuria construction",
  },
];

const ConstructionProgress = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20">
      <div className="">
        {/* Overline */}
        <p className="text-center text-xs tracking-[0.2em] text-gray-500 uppercase">
          Construction Progress
        </p>

        {/* Title */}
        <h2 className="mt-4 text-center font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-gray-900">
          From Blueprint to Reality
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {CARDS.map((card) => (
            <figure key={card.title} className="group">
              <div className="relative overflow-hidden rounded-md ring-1 ring-black/10">
                {/* Image with 16:9 aspect */}
                <div className="relative aspect-video">
                  <BackgroundVideo
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={card.image}
                    src={card.backVideo}
                  />
                  {/* Status chip */}
                  <span className="absolute left-3 top-3 rounded-sm bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {card.status}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <figcaption className="mt-3 text-lg md:text-xl text-gray-900">
                {card.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionProgress;
