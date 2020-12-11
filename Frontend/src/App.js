import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dashboard from './Views/Dashboard'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
        <Header />
        <Dashboard />
        <Footer />
    </div>
  );
}

export default App;
