import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DesktopMenu from './components/desktopMenu/DesktopMenu';
import Home from './pages/Home';
import {createBrowserRouter, BrowserRouter, RouterProvider, useLocation, HashRouter} from "react-router-dom"
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';



function App() {
  
  // const location = useLocation();
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<Home/>
      
  //   },
  //   {
  //     path: "/menuopen",
  //     element:<DesktopMenu/>
      
  //   }
  // ])
  return (
  //  <AnimatedRoutes/>
    // <RouterProvider router={router} />   
    <BrowserRouter> {/* Wrapping the entire app in a Router component */}
    <AnimatedRoutes /> {/* This will now have access to useLocation */}
  </BrowserRouter>
  );
}

export default App;
