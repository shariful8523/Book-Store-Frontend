import Banner from '../Components/Banner';
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
        </>
    );
};

export default Home;