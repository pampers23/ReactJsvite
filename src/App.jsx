import 'font-awesome/css/font-awesome.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

import Footer from "./components/Footer";
import Activities from './components/Activities';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
