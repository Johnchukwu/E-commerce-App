import React from 'react'



const App = () => {
  return (
    <>
    <div className="App">
    <header className="App-header">
      <h1>My E-Commerce Site</h1>
    </header>
    <main>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <PopularCollection />
      <Footer />

    </main>
  </div>
  </>
  )
}

export default App