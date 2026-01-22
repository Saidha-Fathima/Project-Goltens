import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function CategoryFilter({ categories, activeCategory, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="fixed top-24 left-0 w-full z-40"
      style={{ backgroundColor: "#00005C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 lg:pt-6 py-2 sm:py-4 flex items-center justify-between">
        
        {/* Hamburger Button */}
        <button
          className="text-white text-xl sm:hidden"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Desktop category buttons */}
        <div className="hidden sm:flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition
                ${
                  activeCategory === category
                    ? "bg-white text-[#000080]"
                    : "bg-[#1a1a7a] text-white hover:bg-[#33338f]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onChange(category);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    activeCategory === category
                      ? "bg-white text-[#000080]"
                      : "bg-[#1a1a7a] text-white hover:bg-[#33338f]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
