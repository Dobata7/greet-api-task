import React from 'react';
import AddToCard from './AddToCard'

function Card({ user }) {

  const htmlString = user.short_description;

  // Create a new DOMParser
  const parser = new DOMParser();

  // Parse the HTML string into a DOM document
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Access the content of the parsed document
  const paragraphContent = doc.body.textContent;

  return (
    <div className="card">
      <img src={user.images[0].src} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{paragraphContent}</p>
      <AddToCard />
    </div>
  );
}

export default Card;
