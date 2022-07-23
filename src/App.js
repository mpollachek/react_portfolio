import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import FarmstandsPage from './pages/FarmstandsPage';
import FarmstandDetailPage from './pages/FarmstandDetailPage';
import MapsPage from './pages/MapsPage';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='About' element={<AboutPage />} />
        <Route path='farmstands' element={<FarmstandsPage />} />
        <Route path='farmstands/:farmstandId' 
        element={<FarmstandDetailPage /> } /> 
        <Route path='maps' element={<MapsPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
