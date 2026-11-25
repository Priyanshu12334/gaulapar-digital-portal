import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutGaulapar from './components/AboutGaulapar';
import PlacesToExplore from './components/PlacesToExplore';
import Development from './components/Development';
import Education from './components/Education';
import Agriculture from './components/Agriculture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gov-cream-bg antialiased selection:bg-gov-green-600 selection:text-white">
      <Navbar />

      <div className="site-content">
        <main>
        <Hero />
        <AboutGaulapar />
        <PlacesToExplore />
        <Development />
        <Education />
        <Agriculture />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
