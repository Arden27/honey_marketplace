import React from 'react';

// Import the corresponding components for the includes
import Slider from './components/Slider';
import HowTo from './components/HowTo';
import Description from './components/Description';
import Register from './components/Register';
import Favourites from './components/Favourites';
import Articles from './components/Articles';

function Home() {
  return (
    <main className="home">
      <Slider />
      <HowTo />
      <Description />
      <Register />
      <Favourites />
      <Articles />
    </main>
  );
}

export default Home;