import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Card from './Components/MovieCards/Card';
import { orginals,action,comedy, horror, romance, trending } from './urls';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card url={trending} title='Trending Now' />
      <Card url={orginals} title='Netflix originals' isSmall/>
      <Card url={action} title='Action' isSmall/>
      <Card url={comedy} title='Comedy' isSmall/>
      <Card url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;
