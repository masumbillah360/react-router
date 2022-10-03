
import './App.css';
import Home from './componenets/Home/Home';
import About from './componenets/About/About';
import Blog from './componenets/Blog/Blog';
import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path : "/", element: <Layout></Layout>, children : [
      {path : "/home", element: <Home></Home>},
      {path : "/blog", element: <Blog></Blog>},
      {path : "/about", element: <About></About>},
    ]},
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
