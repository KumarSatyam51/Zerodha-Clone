
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import NotFound from './landing_page/NotFound';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Supportpage from './landing_page/support/Supportpage';



// const root = ReactDOM.createRoot(document.getElementById("root"));  // ✅ ReactDOM not ReactDom
// root.render(
//   <App />
// );
function App(){
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/support" element={<Supportpage/>} />
        <Route path="/*" element={<NotFound/>} />
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App;



