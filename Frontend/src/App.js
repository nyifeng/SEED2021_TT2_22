import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
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

  );
}

export default App;
