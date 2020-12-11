import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import Login from './Views/Login';

function App() {
  return (
    <Router>
        <div className="relative pb-10 min-h-screen">
            <Switch>
                <Route path='/home'>
                    <Header />
                    <Home />
                    <Footer />
                </Route>
                <Route path='/login'>
                    <Header />
                    <Login />
                    <Footer />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
