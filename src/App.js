import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./componenets/About/About";
import Blog from "./componenets/Blogs/Blogs";
import Home from "./componenets/Home/Home";
import Notfound from "./componenets/Notfound/Notfound";
import UserDetails from "./componenets/UserDetails/UserDetails";
import Layout from "./Layout/Layout";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			children: [
				{ path: "/home",
        loader : async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users');
        },
        element: <Home></Home> },
				{ path: "blog",
        loader: ()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element: <Blog></Blog> },
				{ path: "about", element: <About></About> },
        {path : "user/:id",
        loader : async({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        },
        element : <UserDetails></UserDetails>}
			],
		},
    {path : "*", element: <Notfound></Notfound>}
	]);
	return (
		<div className="container mx-auto text-center">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
