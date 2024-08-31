import Banner from "../components/ui/home/Banner";
import Benefits from "../components/ui/home/Benefits";
import Categories from "../components/ui/home/Categories";
import Featured from "../components/ui/home/Featured";
import Footer from "../components/ui/home/Footer";
import Gallery from "../components/ui/home/Gallery";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Featured />
      <Benefits/>
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default HomePage;