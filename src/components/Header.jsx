import assets from "../assets/assets";
import { FaDownload } from "react-icons/fa";

function Header() {
  const handleDownload = () => {
    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1fQoABQbbFrCEKNardLSKhKgbHZfL80dh";
    window.open(downloadUrl, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-3 flex items-center">

        <div className="flex-1 flex items-center">
          <img
            src={assets.goltens}
            className="w-16 sm:w-28"
            alt="Goltens logo"
          />
        </div>

        <div className="flex-1 text-center">
          <p className="text-white text-lg sm:text-xl font-medium hidden sm:block">
            Goltens Branches and Locations by Region
          </p>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-white text-black px-3 sm:px-4 py-2 sm:py-2 rounded font-semibold hover:bg-yellow-400 transition text-sm sm:text-base"
          >
            <FaDownload />
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>
      </div>
      <div className="flex-1 text-center">
  <p className="text-black bg-white text-lg sm:text-base font-bold block px-1 sm:hidden">
    All Branches and Locations by Region
  </p>
</div>

    </header>
  );
}

export default Header;