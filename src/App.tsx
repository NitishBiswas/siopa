import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeScreen from './screens/HomeScreen';
import HeaderSection from './sections/HeaderSection';
import NotFoundScreen from './screens/NotFoundScreen';
import FooterSection from './sections/FooterSection';
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import BillingScreen from './screens/BillingScreen';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let lastScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener(
    'scroll',
    function handleScroll() {
      const scrollTopPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTopPosition > lastScrollTop) {
        document.body.classList.remove("scroll-bottom");
        document.body.classList.add("scroll-top");
      } else if (scrollTopPosition < lastScrollTop) {
        document.body.classList.remove("scroll-top");
        document.body.classList.add("scroll-bottom");
      }
      lastScrollTop =
        scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    },
    false,
  );

  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/product-details/:id" element={<ProductDetailsScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/checkout/billing" element={<BillingScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <FooterSection />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  )
}

export default App