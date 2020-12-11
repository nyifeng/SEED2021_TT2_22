import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
