import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryScreen from './screens/CategoryScreen';
import Categories from './screens/Categories';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import Landing from './screens/Landing';
import ConfirmScreen from './screens/ConfirmScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Landing} />
      <Container>
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/category/:id' component={CategoryScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/confirm' component={ConfirmScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
      </Container>
    </Router>
  );
};

export default App;
