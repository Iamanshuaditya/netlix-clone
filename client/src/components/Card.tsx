import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Card({ top, title }: { top: number; title: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={`top-[${top}em] maxWidth:absolute z-50  `}>
        <h1 className="font-semibold text-[1.2500em] ml-20 mb-2 w-[150%] xl:text-6xl xl:mb-10  ]">
          {title}
        </h1>
        <div className="text-white bg-[#00000088] z-50  w-8 justify-center opacity-0  left-[5em]  grid items-center  absolute hover:opacity-100 transition duration-150  h-[11.5em]">
          <FaChevronLeft />
        </div>
        <div
          className="absolute left-20 overflow-y-scroll  "
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="w-[75rem] flex  xl:w-[70rem]">
            <Image />
          </div>
        </div>
        <div className="text-white bg-[#00000088] z-50    hover:opacity-100 w-8 justify-center  opacity-0 h-[11.5em] left-[78em]  grid items-center absolute    transition duration-150">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Card;

const imageLink = [
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
  "https://image.tmdb.org/t/p/w500//42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
];

function Image() {
  return (
    <>
      {imageLink.map((link, index) => (
        <img
          key={index}
          src={link}
          alt="image"
          className="m-1 hover:scale-110 transition duration-150 ease-out xl:w-[90em] xl:h-[33em] w-80"
        />
      ))}
    </>
  );
}
