import Header from './components/Header'
import Button from './components/Button'
import Toolbar from './components/Toolbar';
import { useState, useEffect } from 'react';
import CollectionViewer from './components/CollectionViewer';

// This is the central component from which all other components are loaded
function App() {

 
  return (
    <div className="container">
      <Header />
      <Toolbar />
      <CollectionViewer />
    </div>
  );
}

export default App;
