import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css'; // Assuming you have an App.css file for global styles


import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;