import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import SearchComponent from "@/components/travelSearch"
import ThingsToDoSection from "@/components/thingsToDo";
import PopularDestination from "@/components/popularDestination";
import AboutUs from "@/components/aboutUs";
import SubscribeSection from "@/components/subscribe";

export default function Home() {
  return (
      <>
      <Navbar />
      <HeroSection/>
      <SearchComponent/>
      <ThingsToDoSection/>
      <PopularDestination/>
      <AboutUs/>
      <SubscribeSection/>
      </>
  );
}
