import './App.css';
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ContentPage from './components/ContentPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path=":lang" element={<ContentPage />}></Route>
    
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
