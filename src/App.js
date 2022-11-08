import logo from './logo.svg';
import './App.css';
import Navber from './pages/Shared/Navber/Navber';
import Footer from './pages/Shared/Footer/Footer';
import Topber from './pages/Shared/Topber/Topber';
import Banner from './pages/Banner/Banner';

function App() {
  return (
    <div className="  mx-auto">
      <Topber></Topber>
      <Navber></Navber>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
