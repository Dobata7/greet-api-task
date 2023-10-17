import React from 'react';
import Card from './Card';

function CardList({ data, selectedCategory }) {
  const filteredData = selectedCategory
    ? data.filter((user) =>
        user.categories.some((category) => category.name === selectedCategory)
      )
    : data;

  return (
    <div className="cards-container">
      {filteredData.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default CardList;
