import { useRef } from "react";
import { SECTIONS_LIST } from "../../data/data";

export default function Navbar() {
  const headerRef = useRef(null);

  const handleScroll = (sectionId) => {
    const headerHeight = headerRef.current?.offsetHeight + 10 || 0;
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={headerRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
      className="py-6 bg-[#1e293b] text-[#e2e8f0] md:text-base text-sm shadow-[4px_6px_rgba(0,0,0,0.1)]"
    >
      <ul className="flex md:flex-row flex-col flex-wrap md:gap-8 gap-4 justify-center items-center">
        {SECTIONS_LIST.map((el) => (
          <button
            key={el.name}
            className="hover:text-[#22d3ee] text-[#e2e8f0]"
            onClick={() => handleScroll(el.id)}
          >
            {el.name}
          </button>
        ))}
      </ul>
    </div>
  );
}
