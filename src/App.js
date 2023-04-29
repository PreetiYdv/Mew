import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
<<<<<<< HEAD
import MewNav from "./components/MewNav";
import Header from "./components/Header";
=======
import "./Root.css"
>>>>>>> 5ee2609742f1312586d76cf4bda7f10d363e9273
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MewNav from "./components/MewNav";
import Connect from "./components/Connect";
import Groomers from "./components/Groomers";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
<<<<<<< HEAD
  return <>
     
      <Header/>
  </>;
=======
  return (
    <>
      <div className="bg_main">
        <MewNav />
      </div>
      <div className="bg_main">
        <Connect />
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
>>>>>>> 5ee2609742f1312586d76cf4bda7f10d363e9273
}

export default App;
