import logo from './logo.svg';
import './App.css';
import Navber from './pages/Shared/Navber/Navber';
import Footer from './pages/Shared/Footer/Footer';
import Topber from './pages/Shared/Topber/Topber';
import Banner from './pages/Banner/Banner';
import BannerService from './pages/Banner_service/BannerService';
import Content from './pages/Content/Content';
import FaQ from './pages/F&Q/FaQ';
import Service from './pages/Service/Service';
import ServiceDetails from './pages/Service/ServiceDetails';
function App() {
  return (
    <div className="  mx-auto">
      <Topber></Topber>
      <Navber></Navber>
      <Banner></Banner>
      
      <BannerService></BannerService>
      <Content></Content>
      <FaQ></FaQ>
      <Service></Service>
      <ServiceDetails></ServiceDetails>
      <Footer></Footer>
    </div>
  );
}

export default App;
