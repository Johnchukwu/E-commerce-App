import { useState } from 'react';
import axios from 'axios';
import './AddItem.css';
import PropTypes from 'prop-types';

const AddItemForm = ({ onItemAdded }) => {
  const [formData, setFormData] = useState({
    collection: '',
    category: '',
    name: '', 
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      ...(name === 'collection' && { category: '' }) // Reset category when collection changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form data:', formData);

    try {
      await axios.post('http://localhost:5020/api/items', formData);
      console.log('onItemAdded type:', typeof onItemAdded);
      onItemAdded();
      setFormData({
        collection: '',
        category: '',
        name: '',
        price: '',
        image: '',
      });
    } catch (error) {
      console.error('Error adding item:', error);
      alert(`Error: ${error.response?.data?.message || 'Something went wrong'}`);
    }
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Collection:
          <select name="collection" value={formData.collection} onChange={handleChange}>
            <option value="">Select Collection</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
          </select>
        </label>
        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            {formData.collection === 'men' && (
              <>
                <option value="shirt">Shirt</option>
                <option value="trouser">Trouser</option>
                <option value="shoes">Shoes</option>
              </>
            )}
            {formData.collection === 'women' && (
              <>
                <option value="top">Top</option>
                <option value="skirt">Skirt</option>
                <option value="shoe">Shoe</option>
              </>
            )}
            {formData.collection === 'accessories' && (
              <>
                <option value="hat">Hat</option>
                <option value="belt">Belt</option>
                <option value="bag">Bag</option>
              </>
            )}
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

AddItemForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired
};

AddItemForm.defaultProps = {
  onItemAdded: () => console.log('onItemAdded prop was not passed.')
};

export default AddItemForm;
