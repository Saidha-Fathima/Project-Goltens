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
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center">
        {/* Logo on the left */}
        <div className="flex-1">
          <img
            src={assets.goltens}
            className="w-28"
            alt="Goltens logo"
          />
        </div>

        {/* Text centered */}
        <div className="flex-1 text-center">
          <p className="text-white text-xl font-medium">
            Goltens Branches and Locations by Region
          </p>
        </div>

        {/* right side */}
        <div className="flex-1 flex items-center justify-end">
          <button onClick={handleDownload} className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition">
            <FaDownload />
            Download
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
