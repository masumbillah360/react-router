import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./componenets/About/About";
import Blog from "./componenets/Blog/Blog";
import Home from "./componenets/Home/Home";
import Notfound from "./componenets/Notfound/Notfound";
import Layout from "./Layout/Layout";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			children: [
				{ path: "/home", element: <Home></Home> },
				{ path: "/blog", element: <Blog></Blog> },
				{ path: "/about", element: <About></About> },
			],
		},
    {path : "*", element: <Notfound></Notfound>}
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
