import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import './Hero.css'; // Import the CSS file for custom styles

const Hero = () => {
  return (
    <div className="hero-container">
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false} // Add this line to hide the dots
      className="carousel-container"
    >
      {/* Image 1 */}
      <div className="carousel-slide">
        <img
          className="carousel-image"
          src="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2023/08/14100801/Top-International-Male-Influencers-Update-1920x1080-1.jpg"
          alt="Image 1"
        />
        <div className="carousel-caption">
          <h1 className="carousel-title">ELEVATE YOUR STYLE TO THE NEXT LEVEL</h1>
          <h3 className="carousel-subtitle">
            Explore our latest fashion collections and discover the perfect look for you
          </h3>
          <Link to="/shop" className="carousel-button">Explore Our Collections</Link>
        </div>
      </div>

      {/* Image 2 */}
      <div className="carousel-slide">
        <img
          className="carousel-image"
          src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBpbmZsdWVuY2VyfGVufDB8fDB8fHww"
          alt="Image 2"
        />
        <div className="carousel-caption">
          <h1 className="carousel-title">UNLEASH YOUR CONFIDENCE TO THE WORLD</h1>
          <h3 className="carousel-subtitle">
            Our trendy outfits will make you feel empowered and stylish
          </h3>
          <Link to="/collection" className="carousel-button">Explore Our Collections</Link>
        </div>
      </div>

      {/* Image 3 */}
      <div className="carousel-slide">
        <img
          className="carousel-image"
          src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg"
          alt="Image 3"
        />
        <div className="carousel-caption">
          <h1 className="carousel-title">STAY AHEAD OF TRENDS AND BE FASHIONABLE</h1>
          <h3 className="carousel-subtitle">
            Explore our latest fashion collections and discover the perfect look for you
          </h3>
          <Link to="/collection" className="carousel-button">Learn more</Link>
        </div>
      </div>

      {/* Image 4 */}
      <div className="carousel-slide">
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image 4"
        />
        <div className="carousel-caption">
          <h1 className="carousel-title">EXPERIENCE THE GOOD QUALITY</h1>
          <h3 className="carousel-subtitle">
            Our products are crafted with love and care to ensure exceptional quality
          </h3>
          <Link to="/collection" className="carousel-button">Explore Our Collections</Link>
        </div>
      </div>

      {/* Image 5 */}
      <div className="carousel-slide">
        <img
          className="carousel-image"
          src="https://media.istockphoto.com/id/1394865931/photo/one-baby-small-caucasian-child-little-girl-in-park-with-her-mother-holding-hand-while-play-in.jpg?s=612x612&w=0&k=20&c=mlXYH7dNdyxqBDMRD_sGeM93jCsowPSe7CPa2kKdDYQ="
        />
        <div className="carousel-caption">
          <h1 className="carousel-title">EXPERIENCE THE ART OF FASHION</h1>
          <h3 className="carousel-subtitle">
            Our passion for quality and craftsmanship shines through in every stitch
          </h3>
          <Link to="/collection" className="carousel-button">Explore Our Collections</Link>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default Hero;
