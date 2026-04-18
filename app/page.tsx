import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { IntroAnimation } from '@/components/sections/IntroAnimation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-background text-foreground">
        <IntroAnimation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
