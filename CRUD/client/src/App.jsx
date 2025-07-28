import React from 'react'
import User from './getuser/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Update from './updateuser/Update';
import Adduser from './adduser/Adduser';

const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Adduser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);
  return (
        <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );

  
}

export default App
