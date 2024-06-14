'use client'

import Navbar from "./_components/common/Header";
import Attribute from "./_components/section/Attribute";
import Authorization from "./_components/section/Authorization";
import Benifit from "./_components/section/Benifit";
import DemoDashboard from "./_components/section/DemoDashboard";
import Feature from "./_components/section/Feature";
import Footer from "./_components/section/Footer";
import HeroBar from "./_components/section/HeroBar";
import InfoSection from "./_components/section/Info";
import Innovation from "./_components/section/Innovation";
import UseCase from "./_components/section/UseCase";
import WelcomeSection from "./_components/section/Welcome";
import Contributor from "./_components/section/contributor";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBar />
      <Innovation />
      <InfoSection />
      <Feature />
      <WelcomeSection />
      <Attribute />
      <Contributor />
      <UseCase />
      <DemoDashboard />
      <Benifit />
      <Authorization />
      <Footer />
    </>
  );
}
