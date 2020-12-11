import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import Login from './Views/Login';
import Dashboard from './Views/Dashboard';
import PrivateRoute from './utils/PrivateRoute';


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
          ...state,
          isAuth: true,
          token
      });
  });

  return (

    <Router>
        <div className="relative pb-10 min-h-screen">
            <Header />
                <Switch>
                    <PrivateRoute token={state.token} isAuth={state.isAuth} path='/home'>
                        <Home />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <PrivateRoute token={state.token} isAuth={state.isAuth} path='/dashboard'>
                        <Dashboard />
                    </PrivateRoute>

                </Switch>
            <Footer />
        </div>
    </Router>

  );
}

export default App;
