

import './App.css';
import PopularCollection from './components/product/PopularCollection';
import Hero from './components/Hero'
import Header from './components/header'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My E-Commerce Site</h1>
      </header>
      <main>
        <Header />
      <Hero/>
        <PopularCollection />
         
      </main>
    </div>
  );
}

export default App;

