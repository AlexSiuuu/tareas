import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Registro from './routes/Registro.jsx';
import Dashboard from './routes/Dashboard.jsx';
import ProtegerRutas from './routes/ProtegerRutas';
import { AuthProvider } from './Auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/",
    element: <ProtegerRutas />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
