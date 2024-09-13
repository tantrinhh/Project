import { useState } from "react";

function SizeTabSelect({ sizes, onSelect }: any) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size: any) => {
    console.log(size);
    
    setSelectedSize(size);
    onSelect(size);
  };

  return (
    <div className="md:px-2 py-5">
      <div className="flex space-x-4">
        {sizes.map((size: any) => (
          <div
            key={size}
            onClick={() => handleSizeSelect(size)}
            className={`cursor-pointer p-4 border rounded-lg ${
              selectedSize === size
                ? "border-indigo-500"
                : "border-gray-300 hover:border-gray-400"
            } ${selectedSize === size ? "bg-indigo-100" : "bg-white"}`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SizeTabSelect;
