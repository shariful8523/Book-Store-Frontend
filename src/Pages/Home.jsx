import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import HomeAbout from '../Components/HomeAbout';
import HomeBooks from '../Components/HomeBooks';
import Navbar from '../Components/Navbar';
import OurBestSellers from '../Components/OurBestSellers';

const Home = () => {
    return (
        <>
           <Navbar/>
           <Banner/>
           <OurBestSellers/>
           <HomeBooks/>
           <HomeAbout/>
           <Footer/>
        </>
    );
};

export default Home;