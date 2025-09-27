"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const categoriesList = [
  { name: "COLD PRESSED JUICES" },
  { name: "FRESH JUICES" },
  { name: "FRUIT MILKSHAKES" },
  { name: "SIGNATURE SHAKES" },
  { name: "POWER SHAKES" },
  { name: "SMOOTHIES" },
  { name: "ICECREAM SHAKES" },
  { name: "ICECREAM CUP" },
  { name: "MARGARITAS" },
  { name: "LASSI" },
  { name: "SLUSHES" },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // update buttons visibility when scrolling
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-[#8DC540] py-3">
      {/* Left Button */}
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2  md:p-3  cursor-pointer"
        >
          <ChevronLeft className=" text-black" />
        </button>
      )}

      {/* Categories Scrollable */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth px-8 ml-20 mr-20 text-center text-sm md:text-lg text-white font-bold"
      >
        {categoriesList.map((category, index) => (
          <span key={index} className="px-3 md:px-4 cursor-pointer">
            {category.name}
          </span>
        ))}
      </div>

      {/* Right Button */}
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3   cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-black" />
        </button>
      )}
    </div>
  );
}
export { categoriesList };
