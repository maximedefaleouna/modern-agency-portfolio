
import Navbar from "./segments/Navbar";
import Hero from "./segments/Hero";
import Achievement from "./segments/Achivement";
import About from "./segments/About";
import Services from "./segments/Services";
import Portfolio from "./segments/Portofolio";
import Testimonials from "./segments/Testimonials";
import Contact from "./segments/Contact";
import Blog from "./segments/Blog";
import Footer from "./segments/Footer";
import "swiper/css"

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Achievement/>
   <About/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Blog/>
   <Footer/>
   </>
  );
}

export default App;
