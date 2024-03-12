import Header from "@/components/header";
import HeroBanner from "@/components/heroBanner";
import About from "@/components/about";
import Events from "@/components/events";
import Routine from "@/components/routine";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Import the ScrollToTopButton component
import WhatsAppButton from "@/components/WhatsAppButton"; // Import the WhatsAppButton component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroBanner />
      <About />
      <Events />
      <Routine />
      <Footer />
      <ScrollToTopButton /> {/* Add the ScrollToTopButton component */}
      <WhatsAppButton /> {/* Add the WhatsAppButton component */}

    </div>
  );
}
