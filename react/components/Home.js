import React from 'react';

// Import the corresponding components for the includes
import Slider from './Slider';
import HowTo from './HowTo';
import Description from './Description';
import Register from './Register';
import Favourites from './Favourites';
import Articles from './Articles';

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