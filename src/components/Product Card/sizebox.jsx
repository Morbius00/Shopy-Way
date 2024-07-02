import {useState} from "react";

export default function Sizebox() {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center justify-center">
          <div>Size: </div>
          <button
            className={`w-7 h-7 rounded-full text-sm ${
              selectedSize === "M"
                ? "bg-gray-400 text-gray-800"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
            onClick={() => handleSizeChange("M")}
          >
            M
          </button>
          <button
            className={`w-7 h-7 rounded-full ${
              selectedSize === "S"
                ? "bg-gray-400 text-gray-800"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
            onClick={() => handleSizeChange("S")}
          >
            S
          </button>
          <button
            className={`w-7 h-7 rounded-full ${
              selectedSize === "L"
                ? "bg-gray-400 text-gray-800"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
            onClick={() => handleSizeChange("L")}
          >
            L
          </button>
          <button
            className={`w-7 h-7 rounded-full ${
              selectedSize === "XL"
                ? "bg-gray-400 text-gray-800"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
            onClick={() => handleSizeChange("XL")}
          >
            XL
          </button>
        </div>
      </div>
    </div>
  );
}
