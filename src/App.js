// App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
      <Routes>

          <Route exact path="/" component={Homepage} />

          <Route exact path="/cart" component={Cart} />


          </Routes>
          
          
          
          
        </main>

       
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

