import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

import About from './sections/About';
import FAQ from './sections/FAQ ';
import  Nav from './sections/Navbar';
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Nav/>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Contact/>
      <Testimonials />
      <About/>
      <FAQ/>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
