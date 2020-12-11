import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
<<<<<<< Updated upstream
import Dashboard from './Views/Dashboard'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
        <Header />
        <Dashboard />
        <Footer />
    </div>
=======
import Home from './Views/Home'
import Login from './Views/Login';
import Dashboard from './Views/Dashboard';


function App() {
  return (
    <Router>
        <div className="relative pb-10 min-h-screen">
            <Header />
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                </Switch>
            <Footer />
        </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
