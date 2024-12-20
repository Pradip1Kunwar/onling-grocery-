import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Menu from './page/menu';
import Home from './page/home';
import Contact from './page/contact';
import About from './page/about';
import Login from './page/login';
import NewProduct from './page/newProduct';
import Signup from './page/signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element = {<Home/>}/>
      <Route path="menu" element={<Menu/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='newproduct' element={<NewProduct/>}/>
      <Route path='signup' element={<Signup/>}/>
      
      



    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
