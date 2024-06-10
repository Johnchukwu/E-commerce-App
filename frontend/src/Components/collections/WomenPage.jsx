import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../ItemCard';
import './CategoryPage.css';

const WomenPage = () => {
  const [womenItems, setWomenItems] = useState({
    dresses: [],
    tops: [],
    skirts: [],
    shoes: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWomenItems = async () => {
    try {
      const response = await axios.get('http://localhost:5020/api/items/women');
      console.log('Response from backend:', response.data); // Log the response data

      // Categorize items based on their names or other properties
      const categorizedItems = {
        tops: response.data.filter(item => item.category.toLowerCase().includes('top')),
        skirts: response.data.filter(item => item.category.toLowerCase().includes('skirt')),
        shoes: response.data.filter(item => item.category.toLowerCase().includes('shoe')),
      };

      setWomenItems(categorizedItems);
    } catch (error) {
      setError('Error fetching women items');
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchWomenItems();
  }, []); // Only fetch once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="category-page">
      <h1>Women Collection</h1>

      {Object.keys(womenItems).map((section) => (
        <div key={section} className="category-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <div className="item-cards">
            {womenItems[section].map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WomenPage;
