import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Counters from '@/components/Counters';
import HowItWorks from '@/components/HowItWorks';
import Affirmations from '@/components/Affirmations';
import Plans from '@/components/Plans';
import Delivery from '@/components/Delivery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import { PaintedWave } from '@/components/Painted';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Counters />
      <HowItWorks />
      <Affirmations />
      <Plans />
      <Delivery />

      <div style={{ position: 'relative', height: 80 }}>
        <PaintedWave variant="ocean" style={{ top: 0 }} />
      </div>

      <Testimonials />

      <div style={{ position: 'relative', height: 80 }}>
        <PaintedWave variant="terracotta" style={{ top: 0 }} />
      </div>

      <FAQ />
      <CtaBanner />
      <Footer />
    </>
  );
}
