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
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import { useEffect } from 'react';
// import { useDispatch } from "react-redux";
// import { fetchComments } from './features/comments/commentsSlice';
// import { fetchFarmstands } from './features/farmstands/farmstandsSlice';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(fetchFarmstands());
  //     dispatch(fetchComments());
  // }, [dispatch]);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='sign-in' element={<SignInPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
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
