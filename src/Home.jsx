import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/Navbar/TopBar";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs.JSX";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import VideoIntroduction from "./components/VideoIntroduction/VideoIntroduction";
import HappyClients from "./components/HappyClients/HappyClients";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import BlogSection from "./components/BlogSection/BlogSection";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQSection/FAQSection";
import AppDownload from "./components/AppDownload/AppDownload";
import Statistics from "./components/Statistics/Statistics";
import NewsletterSignup from "./components/NewsletterSignup/NewsletterSignup";
import Footer from "./components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSection />
      <Sidebar />
      <TrustedBy />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <VideoIntroduction />
      <HappyClients />
      <HowItWorks />
      <BlogSection />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <Statistics />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Home;
