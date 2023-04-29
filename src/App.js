import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Root.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MewNav from "./components/MewNav";
import Connect from "./components/Connect";
import Groomers from "./components/Groomers";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg_main">
        <MewNav />
      </div>
      <div className="bg_main">
        <Connect/>
      </div>
      <div className=" bg_second">
        <Groomers/>
      </div>
      <div className="bg_main">
         <Blog />
      </div>
     
      {/* <Footer/> */}
    </>
  );
}

export default App;
