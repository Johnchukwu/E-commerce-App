

import './App.css';
import PopularCollection from './components/product/PopularCollection';
//ximport Header from './components/Header';
import Hero from './components/Hero'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My E-Commerce Site</h1>
      </header>
      <main>
       { /*<Header /> */}
        <Hero/>
        <PopularCollection />
         
      </main>
    </div>
  );
}

export default App;

