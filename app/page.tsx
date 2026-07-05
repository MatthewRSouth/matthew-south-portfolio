import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Path from "./components/Path";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,72px)]">
        <Hero />
        <About />
        <Work />
        <Path />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
