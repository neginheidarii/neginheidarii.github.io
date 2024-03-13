import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
