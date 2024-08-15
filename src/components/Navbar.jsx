import { useState, useRef } from "react";
import { SECTIONS_LIST } from "../../data/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={headerRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
      className="bg-[#1e293b] text-[#e2e8f0] shadow-[4px_6px_rgba(0,0,0,0.1)]"
    >
      <div className="py-6 md:flex md:justify-center md:items-center">
        <div className="md:hidden flex justify-between items-center px-4">
          <div className="text-lg font-semibold">Menu</div>
          <button
            onClick={toggleMenu}
            className="text-[#e2e8f0] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`flex flex-col justify-center items-center ${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row md:flex-wrap md:gap-8 md:justify-center md:items-center`}
        >
          {SECTIONS_LIST.map((el) => (
            <button
              key={el.name}
              className="hover:text-[#22d3ee] text-[#e2e8f0] md:py-0 py-2"
              onClick={() => {
                handleScroll(el.id);
                setIsOpen(false);
              }}
            >
              {el.name}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
