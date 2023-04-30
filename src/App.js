import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import "./Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MewNav from "./components/MewNav";
import Connect from "./components/Connect";
import Groomers from "./components/Groomers";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

import Service from "./components/Service";

import Facilities from "./components/Facilities";


function App() {
  return (
    <>
      <div className=" bg_second">
        <MewNav />
      
      </div>
      <div className=" bg_second">
        <Header />
      </div>
      <div className=" bg_second">
        <Connect />
      </div>
      <div className="bg_main">
        <Service />
      </div>
      <div className=" bg_second">
        <Facilities/>
      </div>
     
      <div className="bg_main">
        <Groomers />
      </div>
      <div className=" bg_second">
        <Blog />
      </div>
      <div className="bg_main ">
        <Footer />
      </div>
    </>
  );
}

export default App;
