import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import Login from './Views/Login';
import Dashboard from './Views/Dashboard';


function App() {
  const [state, setState] = useState({
      isAuth: false,
      token: null
  });

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
          return;
      };
      setState({
          token,
          isAuth: true
      });
  });

  return (

    <Router>
        <div className="relative pb-10 min-h-screen">
            <Header />
                <Switch>
                    <Route token={state.token} isAuth={state.isAuth} path='/home'>
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route token={state.token} isAuth={state.isAuth} path='/dashboard'>
                        <Dashboard />
                    </Route>

                </Switch>
            <Footer />
        </div>
    </Router>

  );
}

export default App;
