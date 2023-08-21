import React from "react";
import { Category } from "../components/enums";

interface CategoryDropdownProps {
  onSelect: (selectedCategory: Category) => void;
  setSelectedCategory: (selectedCategory: Category) => void;
  category: Category;
}

export const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  onSelect,
  category,
  setSelectedCategory,
}) => {
  const capitalizeFirstLeter = (value: string): string => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as Category;
    setSelectedCategory(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="flex">
      <p>Category:</p>
      <select value={category} onChange={handleSelectChange}>
        {Object.values(Category).map((item) => (
          <option key={item} value={item}>
            {capitalizeFirstLeter(item)}
          </option>
        ))}
      </select>
    </div>
  );
};
