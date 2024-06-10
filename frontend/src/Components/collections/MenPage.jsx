import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../ItemCard';
import './CategoryPage.css';

const MenPage = () => {
  const [menItems, setMenItems] = useState({
    shirts: [],
    trousers: [],
    shoes: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenItems = async () => {
    try {
      const response = await axios.get('http://localhost:5020/api/items/men');
      console.log('Response from backend:', response.data); // Log the response data

      // Categorize items based on their names or other properties
      const categorizedItems = {
        shirts: response.data.filter(item => item.category.toLowerCase().includes('shirt')),
        trousers: response.data.filter(item => item.category.toLowerCase().includes('trouser')),
        shoes: response.data.filter(item => item.category.toLowerCase().includes('shoe')),
      };

      setMenItems(categorizedItems);
    } catch (error) {
      setError('Error fetching men items');
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchMenItems();
  }, []); // Only fetch once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  console.log(menItems)
  return (
    <div className="category-page">
      <h1>Men Collection</h1>

      {Object.keys(menItems).map((section) => (
        <div key={section} className="category-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <div className="item-cards">
            {menItems[section].map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenPage;
