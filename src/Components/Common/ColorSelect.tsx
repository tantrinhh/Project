import { useState } from "react";

function ColorTabSelect({ colors, onSelect }: any) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color: any) => {
    console.log(color);

    setSelectedColor(color);
    onSelect(color);
  };
  return (
    <div className="md:px-2 py-5">
      <div className="flex space-x-4">
        {colors.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => handleColorSelect(item)}
            style={{ backgroundColor: item }} // Hiển thị màu từ item
            className={`cursor-pointer p-4 rounded-lg ${selectedColor === item
              ? "border-4 border-black" // Hiển thị viền đậm khi được chọn
              : "border-2 border-gray-300 hover:border-gray-400" // Viền mặc định khi không chọn
              }`}
          />
        ))}
      </div>
    </div>


  );
}

export default ColorTabSelect;
