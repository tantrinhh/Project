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
        {colors.map((item: any,index:any) => (
          <div
          style={{ backgroundColor: selectedColor === item ? item : 'white'}}
            key={index}
            onClick={() => handleColorSelect(item)}
            className={`cursor-pointer p-4 border rounded-lg ${
              selectedColor === item
                ? `border-[${item}] bg-[${item}]`
                : "border-gray-300 hover:border-gray-400"
            } ${
              selectedColor === item ? `bg-[${item}]` : "border border-[#00000]"
            }`}
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorTabSelect;
