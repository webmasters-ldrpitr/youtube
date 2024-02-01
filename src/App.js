

import Navbar from "./Components/Navbar.js"
import HomeMain from "./Components/HomeMain.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js"
import Events23 from "./Components/Events23.js"
import LoaderComponent from './Components/Loader.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

function App() {
  return (
    <>
  <Router>
  <Navbar /> 
    <Routes>
          <Route path="/about" element = {<About />}>
          </Route>
          <Route path="/" element = {<HomeMain />}>
          </Route>
          <Route path="/events23" element = {<Events23 />}>
          </Route>
    </Routes>
    <LoaderComponent></LoaderComponent>

   <Footer />

   
   </Router>

    </>
  );
}

export default App;
