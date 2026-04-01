import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import CeremonyDetails from "@/components/CeremonyDetails";
import DressCode from "@/components/DressCode";
import GiftRegistry from "@/components/GiftRegistry";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="inicio" className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <CeremonyDetails />
      <DressCode />
      <GiftRegistry />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;