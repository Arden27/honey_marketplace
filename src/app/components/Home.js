import React from 'react';

import Slider from './components/slider';
import HowTo from './components/how-to';
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