import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div >
        {/* Intro */}
        <div className='p-10 text-center bg-blue-gray-50 rounded-lg leading-normal bg-gray-100 '>
  <h1 className='font-serif text-5xl md:text-7xl text-center font-bold text-gray-900 mb-20'>
    Welcome to store where fashion meets passion. 
  </h1>
  <p className='text-lg text-gray-700 italic'>
    We're a team of style enthusiasts dedicated to bringing you the latest trends and must-have pieces for your wardrobe.
  </p>
  <Link to='/Home' className='mt-10 bg-gray-700 hover:bg-gray-900 inline-block py-2 px-3 rounded-md font-bold text-white cursor-pointer transition-colors duration-200'>
    Go back Home
  </Link>
</div>
{/* Story */}
        <div className='p-10 '>
          <h1 className=' text-center font-bold mb-10 text-2xl '>Our stories</h1>
          <h2 className='text-2xl font-serif text-center text-gray-800 italic'>
            Our journey began with a simple idea: to make fashion accessible and
            affordable for everyone. We believe that style is a form of
            self-expression, and that everyone deserves to look and feel their
            best. With [Your Brand Name], we aim to inspire confidence and
            individuality through our curated collections.
          </h2>
        </div>

        {/* mansory */}
        <div className="container mx-auto p-4  bg-gray-100">
            <div className='text-center m-7 mb-20 flex justify-center gap-5 items-center'>
            <h2 className='text-lg font-bold '>piece of our products </h2> 
            <Link to='/Home' className=' bg-blue-700 hover:bg-gray-900  py-2 px-3 rounded-md font-bold text-white cursor-pointer transition-colors duration-200'>
    Go to collections
  </Link>
            </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://thumbs.dreamstime.com/b/fashion-male-shot-portrait-stylish-handsome-man-wearing-hat-coat-sunglasses-men-s-beauty-seasonal-brick-wall-background-86128260.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://cdn.shopify.com/s/files/1/0044/8823/3058/t/1/assets/photo-gallery-39692-apparel-boutique-colors-135620.jpg?9699051801420236126&width=980"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY="
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.lovepik.com/free-png/20211215/lovepik-fashion-suit-outer-model-png-image_401636376_wh1200.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/premium-photo/gender-neutral-face-fashion-portrait-dark-background-trendy-edgy-with-hands-creative-gen-z-beauty-sexy-cosmetics-with-serious-non-binary-person-designer-clothes_590464-143154.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkxQ9LuxbS-7UPMVO0W4JHnUyIc7-sYj92A&s"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXgqUIRWmgKZsYswUZpvr5ANLRPI9z4xbog&s"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-xRAB4WEF6vq38fr-Lar5QlaA_-kCZ_FQg&s"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.istockphoto.com/id/1307568521/photo/its-the-denim-that-does-it-for-me.jpg?s=612x612&w=0&k=20&c=0RQfpn8VJxXl6sO4aUehTsPvyYKGPwVwz1EdJRBU_Nw="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYstQadjBT_gyiVM5shezGrMjX03XpSXoPw&s"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    {/* value cards */}

   
<br/>


<section className="px-8 py-24">
  <div className="container mx-auto text-center">
    <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4"> Our Values</h2>
    <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">our values and responsibilities</p>
  </div>
  <div className="mt-24">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* card 1 */}
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
        <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 className="block antialiased tracking-normal font-sans text-xl  leading-snug text-blue-gray-900 capitalize mb-6 font-extrabold text-center">SUSTAINABILITY</h5>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">We care about the planet. Our sustainable practices aim to reduce waste and minimize our environmental footprint.
</p>
       
        </div>

      </div>
      {/* end of card 1 */}

      {/* card 2 */}
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
        <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-extrabold text-center mb-6 leading-snug text-blue-gray-900 capitalize">Creativity</h5>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Fashion is art. We encourage creativity and self-expression through our unique and bold designs.
</p>
          
        </div>

      </div>
      {/* end of card 2 */}

      {/* card 3 */}
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
        <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-extrabold text-center mb-6 leading-snug text-blue-gray-900 capitalize">inclusivity</h5>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Fashion is for everyone. We believe in inclusivity and diversity, and strive to make our products accessible to all.
</p>
         
        </div>

      </div>
      {/* end of card 3 */}
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default About;
