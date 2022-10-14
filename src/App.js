import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="about" element={ <Home /> } />
        <Route path="projects" element={ <Home /> } />
      </Route>
    </Routes>
  );
}

export default App;
