
import { Link } from 'react-router-dom';
import './CollectionPage.css';

const CollectionPage = () => {
  return (
    <div className="collection-page">
      <h1>Our Collections</h1>
      <div className="collection-categories">
        <Link to="/men" className="collection-category">Men</Link>
        <Link to="/women" className="collection-category">Women</Link>
        <Link to="/accessories" className="collection-category">Accessories</Link>
      </div>
    </div>
  );
};

export default CollectionPage;
