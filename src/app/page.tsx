'use client'
// import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from "@/components/hero";
import NewsLetter from "@/components/newsletter";
import Products from '@/components/products';
import Logos from '@/components/logos';
import Features from '@/components/features';
import Blogs from '@/components/blogs';
import Testimonials from '@/components/testimonials';




export default function Home() {
  useEffect(()=>{
    console.log("Maruf");
    AOS.init();
  },[])
  return (
    <main className="nt-home">
      <Hero/>
      <Products/>
      <Features/>
      <Logos/>
      <NewsLetter/>
      <Blogs/>
      <Testimonials/>
    </main>
  )
}
