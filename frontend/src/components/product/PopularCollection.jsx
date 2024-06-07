import  { useState, useEffect } from 'react';
import './PopularCollection.css';

const mockProducts = [
  {
    _id: '1',
    category: 'Men',
    images: [
      'https://st.depositphotos.com/2097531/2144/i/380/depositphotos_21440313-stock-photo-attractive-man-dressed-casual-wearing.jpg',
      'https://st3.depositphotos.com/9880800/15383/i/380/depositphotos_153831692-stock-photo-young-stylish-multiethnic-businessmen-in.jpg',
      'https://st.depositphotos.com/2015659/1928/i/380/depositphotos_19284721-stock-photo-attractive-man-wearing-jacket-and.jpg',
      'https://st3.depositphotos.com/9037414/18975/i/380/depositphotos_189759040-stock-photo-fashion-stylish-confident-portrair-handsome.jpg'
    ]
  },
  {
    _id: '2',
    category: 'Women',
    images: [
      'https://img.freepik.com/free-photo/three-multicultural-women-street_1303-13437.jpg?size=626&ext=jpg&ga=GA1.1.1726882339.1708013437&semt=ais_user',
      'https://img.freepik.com/free-photo/front-view-beautiful-woman-wearing-formal-clothes-outside-with-copy-space_23-2148448816.jpg?size=626&ext=jpg&ga=GA1.1.1726882339.1708013437&semt=ais_user',
      'https://img.freepik.com/premium-photo/woman-sitting-with-colorful-bags-leather-products-fashion-image-generative-ai_874904-98928.jpg?size=626&ext=jpg&ga=GA1.1.1726882339.1708013437&semt=ais_user',
      'https://img.freepik.com/free-photo/big-mama-plus-size-african-american-model-black-sunglasses-beret-leather-skirt-posed-outdoor_627829-6988.jpg?size=626&ext=jpg&ga=GA1.1.1726882339.1708013437&semt=ais_user'
    ]
  },
  {
    _id: '3',
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',

      'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',

      'https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',

      'https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww'
    ]
  }
];

const PopularCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (

    <div>
      <h2 className='popular-collection-title'>Popular Collection</h2>

    <div >
      <h2>Popular Collection</h2>

      <div className="popular-collection">
        {mockProducts.map(product => (
          <div className="product-card" key={product._id}>
            <h3>{product.category}</h3>
            <div className="image-container">
              <img src={product.images[currentIndex]}  />
            </div>
            <div className="image-carousel">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )}

export default PopularCollection;
