function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="fixed top-28 left-0 w-full z-40" style={{ backgroundColor: "#00005C" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition
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
  );
}

export default CategoryFilter;
