
import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero'
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Index() {
  return (
    <>
      <Hero />
      <Body />
      <Footer/>
    </>
  )
}