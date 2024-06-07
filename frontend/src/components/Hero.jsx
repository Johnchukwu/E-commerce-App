import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Carousel  autoPlay interval={3000} infiniteLoop showThumbs={false}  showStatus={false} className="h-screen">
        {/* image1 */}
      <div className="relative  ">
        <img src="https://media.gettyimages.com/id/1410295767/photo/confident-mature-man-wearing-sunglasses.jpg?s=612x612&w=0&k=20&c=aiZ0Ydz9I9IHEu8AWYLfOSTkeYGZQef8tsMFQm_50UU=" />

        {/* this is the image text */}
        <div className="absolute inset-0 flex flex-col  items-center text-center justify-end md:pb-6  bg-black opacity-65">
          <h1 className=" lg:text-5xl md:text-4xl text-3xl text-white p-5 font-serif md:mb-10   italic md:leading-normal lg:leading-normal">
            ELEVATE YOUR STYLE TO THE NEXT LEVEL 
          </h1>
          <h3 className='text-md lg:text-xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead md:mb-20  text-white '>
            Explore our latest fashion collections and discover the perfect look
            for you
          </h3>
          <Link to="/shop" className=' md:py-2 md:px-5 py-1 px-3 md  mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90 mb-7 md:mb-20'>Shop now</Link>
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
    <div className="absolute inset-0 flex flex-col  items-center text-center justify-end md:pb-6  bg-black opacity-65">
          <h1 className=" lg:text-5xl md:text-4xl text-3xl text-white p-5 font-serif md:mb-10   italic md:leading-normal lg:leading-normal">
            UNLEASH YOUR CONFIDENCE TO WORLD
          </h1>
          <h3 className='text-md lg:text-xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead md:mb-20  text-white '>
          Our trendy outfits will make you feel empowered and stylish
          </h3>
          <Link to="/collection" className='  md:py-2 md:px-5 py-1 px-3 md  mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90 mb-7 md:mb-20'>Explore Our Collections</Link>
        </div>
      </div>

      {/* image 3 */}
      <div>
        <img
          src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg"
          alt="Image 3"
        />

        {/* image 3 text */}

        <div className="absolute inset-0 flex flex-col  items-center text-center justify-end md:pb-6  bg-black opacity-65">
        <h1 className=" lg:text-5xl md:text-4xl text-3xl text-white p-5 font-serif md:mb-10   italic md:leading-normal lg:leading-normal">
            STAY AHEAD OF TRENDS AND BE FASHIONABLE
          </h1>
          <h3 className='text-md lg:text-xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead md:mb-20  text-white '>
            Explore our latest fashion collections and discover the perfect look
            for you
          </h3>
          <Link to="/collection" className='  md:py-2 md:px-5 py-1 px-3 md  mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90 mb-7 md:mb-20'>Learn more</Link>
        </div>
      </div>

      {/*image 4  */}
      
      <div>
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image 2"
        />
    {/* image 4 text */}
    <div className="absolute inset-0 flex flex-col  items-center text-center justify-end md:pb-6  bg-black opacity-65">
    <h1 className=" lg:text-5xl md:text-4xl text-3xl text-white p-5 font-serif md:mb-10   italic md:leading-normal lg:leading-normal">
          EXPERIENCE THE GOOD QUALITY
          </h1>
          <h3 className='text-md lg:text-xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead md:mb-20  text-white '>
          Our products are crafted with love and care to ensure exceptional quality
          </h3>
          <Link to="/collection" className='  md:py-2 md:px-5 py-1 px-3 md  mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90 mb-7 md:mb-20'>Explore Our Collections</Link>
        </div>
      </div>

      {/* image 5 */}
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/04/81/01/93/360_F_481019336_WhptwMw8gFurNqvQ2FVDPuIpZhuk5tB1.jpg"
          alt="Image 2"
        />
    {/* image 5 text */}
    <div className="absolute inset-0 flex flex-col  items-center text-center justify-end md:pb-6  bg-black opacity-65">
    <h1 className=" lg:text-5xl md:text-4xl text-3xl text-white p-5 font-serif md:mb-10   italic md:leading-normal lg:leading-normal">
            EXPREIENCE THE ART OF FASHION
          </h1>
          <h3 className='text-md lg:text-xl md:text-2xl md:mt-10 md:w-85 font-serif text-lead md:mb-20  text-white '>
          Our passion for quality and craftsmanship shines through in every stitch
          </h3>
                 <Link to="/collection" className='  md:py-2 md:px-5 py-1 px-3 md  mt-2 hover:bg-transparent hover:text-white hover:border-2 transition font-bold bg-white rounded-md hover:scale-90 mb-7 md:mb-20'>Explore Our Collections</Link>
        </div>
      </div>
     
      
    </Carousel>
  );
};

export default Hero;
