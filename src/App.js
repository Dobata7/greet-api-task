import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import Filter from './components/Filter';

function App() {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://greet.bg/wp-json/wc/store/products?page=1'
        );
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const categories = data
    ? [...new Set(data.flatMap((user) => user.categories.map((c) => c.name)))]
    : [];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="App">
      <h1>GREET API Task</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {data ? (
        <CardList data={data} selectedCategory={selectedCategory} />
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
}

export default App;
