"use client";
import React, { useState } from "react";

interface FilterComponentProps {}

interface Category {
  name: string;
  slug: string;
}

interface Brand {
  name: string;
  slug: string;
}

const FilterComponent: React.FC<FilterComponentProps> = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range);
  };

  return (
    <div className="w-60 bg-[#dddd] rounded p-4 mx-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Categories</h2>
        <ul className="space-y-2">
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedCategories.includes("Category 1")}
                onChange={() => handleCategoryChange("Category 1")}
              />
              <span className="ml-2">Category 1</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedCategories.includes("Category 2")}
                onChange={() => handleCategoryChange("Category 2")}
              />
              <span className="ml-2">Category 2</span>
            </label>
          </li>
          {/* Add more category options as needed */}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Brands</h2>
        <ul className="space-y-2">
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedBrands.includes("Brand 1")}
                onChange={() => handleBrandChange("Brand 1")}
              />
              <span className="ml-2">Brand 1</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedBrands.includes("Brand 2")}
                onChange={() => handleBrandChange("Brand 2")}
              />
              <span className="ml-2">Brand 2</span>
            </label>
          </li>
          {/* Add more brand options as needed */}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Price Range</h2>
        <select
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={selectedPriceRange}
          onChange={(e) => handlePriceRangeChange(e.target.value)}
        >
          <option value="">Select a range</option>
          <option value="$0 - $50">$0 - $50</option>
          <option value="$50 - $100">$50 - $100</option>
          <option value="$100 - $200">$100 - $200</option>
          <option value="$200+">$200+</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
