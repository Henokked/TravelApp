import './index.css';
import Navbar from "./components/Navigation";
import HeroSection from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Destinations />
      <Steps />
      <Testimonials />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
