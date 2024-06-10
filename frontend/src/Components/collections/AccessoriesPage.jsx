import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../ItemCard';
import './CategoryPage.css';

const AccessoriesPage = () => {
  const [accessoriesItems, setAccessoriesItems] = useState({
    hats: [],
    belts: [],
    bags: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAccessoriesItems = async () => {
    try {
      const response = await axios.get('http://localhost:5020/api/items/accessories');
      console.log('Response from backend:', response.data);

      // Categorize items based on their names or other properties
      const categorizedItems = {
        hats: response.data.filter(item => item.name.toLowerCase().includes('hat')),
        belts: response.data.filter(item => item.name.toLowerCase().includes('belt')),
        bags: response.data.filter(item => item.name.toLowerCase().includes('bag')),
      };

      setAccessoriesItems(categorizedItems);
    } catch (error) {
      setError('Error fetching accessories items');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccessoriesItems();
  }, []); // Only fetch once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="category-page">
      <h1>Accessories Collection</h1>

      {Object.keys(accessoriesItems).map((section) => (
        <div key={section} className="category-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <div className="item-cards">
            {accessoriesItems[section].map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccessoriesPage;
