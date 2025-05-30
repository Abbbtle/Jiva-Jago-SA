import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import About_Page from './pages/About_Page.jsx'
import Contact_Page from './pages/Contact_Page.jsx'
import './index.css';

// Define your routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
    children: [
      // Nested routes
    ]
  },
  {
    path: "/about",
    element: <About_Page />,
  },
  {
    path: "/contact",
    element: <Contact_Page />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Pass router to RouterProvider */}
  </React.StrictMode>,
);