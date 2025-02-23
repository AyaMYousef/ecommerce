import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './components/Register'
import Products from './components/Products'
import Categories from './components/Categories'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Brand from './components/Brand'
import Contact from './components/Contact';
import Service from './components/Service';
import Cart from './components/Cart';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import ProductDetails from './components/ProductDetails';
import Orders from './components/Orders';


export default function App() {


  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '/products', element: <Products></Products> },
        { path: '/productdetails/:id/:categId', element: <ProductDetails></ProductDetails> },
        { path: '/categories', element: <Categories></Categories> },
        { path: '/brands', element: <Brand></Brand> },
        { path: '/contactus', element: <Contact></Contact> },
        { path: '/allorders', element: <Orders></Orders> },
        { path: '/services', element: <Service></Service> },
        { path: '/cart', element: <ProtectedRoute><Cart></Cart></ProtectedRoute> },
        { path: '/logout', element: <Logout></Logout> },
        { path: '*', element: <NotFound></NotFound> }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}>App</RouterProvider>
  )
}
