import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import FounderSection from '@/components/FounderSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <PhilosophySection />
      <FounderSection />
      <Footer />
    </div>
  );
}
