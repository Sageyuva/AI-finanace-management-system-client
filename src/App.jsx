import React from 'react';
import Welcome from './Pages/Welcome';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
