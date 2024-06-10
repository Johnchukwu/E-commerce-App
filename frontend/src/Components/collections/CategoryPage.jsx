import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import PropTypes from 'prop-types'; // Import PropTypes

const CategoryPage = ({ category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5020/api/items/${category}`);
        setItems(response.data);
      } catch (error) {
        setError('Error fetching items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>
      <div className="item-cards">
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.string.isRequired // Define prop types
};

export default CategoryPage;
