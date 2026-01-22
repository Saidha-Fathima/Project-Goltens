import { useState } from "react";
import BranchList from "./components/BranchList";
import CategoryFilter from "./components/CategoryFilter";
import Header from "./components/Header";
import goltensData from "./data/goltensData";

const categories = [
  "All Categories",
  "Goltens America",
  "Goltens Asia",
  "Goltens Europe",
  "Goltens Middle East & Africa",
  "Goltens Green Technologies",
  "Woodward Controls",
  "Goltens Worldwide",
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredBranches =
    activeCategory === "All Categories"
      ? goltensData
      : goltensData.filter((branch) => branch.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <main className="pt-40 lg:pt-56 md:pt-52">
         <BranchList branches={filteredBranches} />
      </main>

    </div>
  );
}

export default App;