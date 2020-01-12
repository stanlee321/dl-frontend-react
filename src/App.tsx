import React from 'react';
import './App.css';

// Custom imports
import Canvas from './Views/Drawer/Canvas';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas/>
      </header>
    </div>
  );
}

export default App;
