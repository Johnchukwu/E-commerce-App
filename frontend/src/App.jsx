



 



import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import PopularCollection from './components/product/PopularCollection';
import Hero from './components/Hero'
import Footer from './components/Footer'



function App() {
const [theme, setTheme] = useState('light')
   <div className = {`container  ${theme}`}
   </div>
   
  return (
    <div className="App">
      <header className="App-header">
        <h1>My E-Commerce Site</h1>
      </header>
      <main>

     <Navbar theme = {theme} setTheme= {setTheme} />
      <Hero/>
        <PopularCollection />
    <Footer/>
      </main>
    </div>
  );
}

export default App;


