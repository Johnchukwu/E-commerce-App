import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}  showStatus={false} className="h-screen">
        {/* image1 */}
      <div className="relative  ">
        <img src="https://media.gettyimages.com/id/1410295767/photo/confident-mature-man-wearing-sunglasses.jpg?s=612x612&w=0&k=20&c=aiZ0Ydz9I9IHEu8AWYLfOSTkeYGZQef8tsMFQm_50UU=" />

        {/* this is the image text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-3 text-center md:justify-center  bg-black opacity-65">
          <h1 className=" md:mt-20 text-white p-7 font-serif text-2xl lg:text-8xl md:text-5xl  md:p-5 italic md:leading-normal lg:leading-normal">
            ELEVATE YOUR STYLE TO THE NEXT LEVEL 
          </h1>
          <h3 className='text-md lg:text-3xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead text-white mb-7'>
            Explore our latest fashion collections and discover the perfect look
            for you
          </h3>
          <Link to="/shop" className=' md:mt-20 py-2 px-5 md:px-10 mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90'>Shop now</Link>
        </div>
        {/* end of image text */}
      </div>

      {/* image 2 */}
      <div>
        <img
          src="https://st4.depositphotos.com/12985790/20643/i/450/depositphotos_206432966-stock-photo-attractive-fashionable-woman-posing-white.jpg"
          alt="Image 2"
        />
    {/* image 2 text */}
<div className="absolute inset-0 flex flex-col justify-center items-center p-3 text-center md:justify-center  bg-black opacity-65">
          <h1 className="  sm:mt-10 md:mt-20 text-white p-7 font-serif text-2xl lg:text-8xl md:text-5xl md:p-5 italic md:leading-normal lg:leading-normal ">
            UNLEASH YOUR CONFIDENCE TO WORLD
          </h1>
          <h3 className='text-md  lg:text-3xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead text-white mb-7'>
          Our trendy outfits will make you feel empowered and stylish
          </h3>
          <Link to="/collection" className='  sm:mt-10 md:mt-20 py-2 px-5 md:px-10 mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md  hover:scale-90'>Explore Our Collections</Link>
        </div>
      </div>

      {/* image 3 */}
      <div>
        <img
          src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg"
          alt="Image 3"
        />

        {/* image 3 text */}

        <div className="absolute inset-0 flex flex-col justify-center items-center p-3 text-center md:justify-center  bg-black opacity-65">
          <h1 className="  md:mt-10 text-white p-7 font-serif text-2xl lg:text-8xl md:text-5xl md:p-5 italic md:leading-normal lg:leading-normal ">
            STAY AHEAD OF TRENDS AND BE FASHIONABLE
          </h1>
          <h3 className='mb-8 text-md lg:text-3xl md:text-2xl mt-0 md:mt-10 md:w-85 font-serif text-lead text-white '>
            Explore our latest fashion collections and discover the perfect look
            for you
          </h3>
          <Link to="./house" className='  md:mt-10 py-2 px-5 md:px-10 mt-0 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90 '>Learn more</Link>
        </div>
      </div>

      {/*image 4  */}
      
      <div>
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image 2"
        />
    {/* image 4 text */}
<div className="absolute inset-0 flex flex-col justify-center items-center p-3 text-center md:justify-center  bg-black opacity-65">
          <h1 className="  sm:mt-10 md:mt-20 text-white p-7 font-serif text-2xl lg:text-8xl md:text-5xl md:p-5 italic md:leading-normal lg:leading-normal ">
          EXPERIENCE THE GOOD QUALITY
          </h1>
          <h3 className='text-md  lg:text-3xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead text-white mb-7'>
          Our products are crafted with love and care to ensure exceptional quality
          </h3>
          <Link to="/collection" className='  sm:mt-10 md:mt-20 py-2 px-5 md:px-10 mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md  hover:scale-90'>Explore Our Collections</Link>
        </div>
      </div>

      {/* image 5 */}
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/04/81/01/93/360_F_481019336_WhptwMw8gFurNqvQ2FVDPuIpZhuk5tB1.jpg"
          alt="Image 2"
        />
    {/* image 5 text */}
<div className="absolute inset-0 flex flex-col justify-center items-center p-3 text-center md:justify-center  bg-black opacity-65">
          <h1 className="  sm:mt-10 md:mt-20 text-white p-7 font-serif text-2xl lg:text-8xl md:text-5xl md:p-5 italic md:leading-normal lg:leading-normal ">
            EXPREIENCE THE ART OF FASHION
          </h1>
          <h3 className='text-md  lg:text-3xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead text-white mb-7'>
          Our passion for quality and craftsmanship shines through in every stitch
          </h3>
          <Link to="/collection" className='  sm:mt-10 md:mt-20 py-2 px-5 md:px-10 mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md  hover:scale-90'>Explore Our Collections</Link>
        </div>
      </div>
     
      
    </Carousel>
  );
};

export default Hero;
