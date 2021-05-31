import { useState } from 'react';
import './App.css';
import Election from './Components/Election/Election';
import parties from './Data/parties';

function App() {
  return (
    <Election parties={parties} />
  );
}

export default App;
