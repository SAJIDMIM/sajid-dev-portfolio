import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";

export default function HomePage() {
  return (
    <main className="navbar-only-stage">
      <Navbar />

      <Hero />

      <About />
    </main>
  );
}