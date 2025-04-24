import React from 'react'
import HeroSection from './HeroSection'
import ProductShowcase from './ProductShowcase'
import ZipBagsSection from './ZipBagsSection'
import Footer from './Footer'
import ReferencesSection from './ReferencesSection'
import FeaturesSection from './FeaturesSection'
import Navbar from './Navbar'

const Landing = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <Navbar />
            </div>
            <HeroSection />
            <ProductShowcase />
            <ZipBagsSection />
            <FeaturesSection />
            <ReferencesSection />
            <Footer />
        </div>
    )
}

export default Landing
