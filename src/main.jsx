import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App'
import Ace from './Ace'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ace", element: <Ace /> }
]);

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />

);


