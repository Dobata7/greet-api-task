import React from 'react';

function Filter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="filter">
      <label htmlFor="category-filter">Filter by Category:</label>
      <select
        name="filter"
        id="category-filter"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
