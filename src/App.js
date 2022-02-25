import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
