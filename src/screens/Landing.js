import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className='landingHero'>
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Welcome to</h1>
        <h1>iNeuron Restro</h1>
        <p>Hevenly Delights</p>
        <Link to='/categories' className='action-btn'>
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Landing;
