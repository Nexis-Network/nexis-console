import DevTools from '@/components/DevTools'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import HeroCards from '@/components/HeroCards'
import Nav from '@/components/Nav'
import React from 'react'

function Home() {
  return (
    <>
    <HeroSection/>
    <HeroCards/>
    <DevTools/>
    <Footer/>
    </>
  )
}

export default Home