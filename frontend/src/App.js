import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/UI/Hero"
import Exercises from "./components/UI/Exercise";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";

function App() {
  return(
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
    )
}

export default App;
