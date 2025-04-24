"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
    {
        id: 1,
        title: "Des Emballages Premium pour Votre Business",
        highlight: "KRAFTVIEW",
        description: "Découvrez notre collection exclusive d'emballages haut de gamme, prêts à expédier.",
        image: "/packedinPrintableDoypacks.png",
        cta: "Voir la collection",
        features: [
            { icon: "📦", text: "Stock immédiat" },
            { icon: "🚛", text: "Livraison rapide" },
            { icon: "💼", text: "Emballages professionnels" }]
    },
    {
        id: 2,
        title: "Expédition Rapide et Fiable",
        highlight: "LIVRAISON EXPRESS",
        description: "Commandez avant 16h, expédié le même jour. Livraison gratuite dès 300 DT.",
        image: "/packedinPrintableDoypacks3.png",
        cta: "Commandez maintenant",
        features: [
            { icon: "⏱️", text: "Expédition jour même" },
            { icon: "🚚", text: "Suivi en temps réel" },
            { icon: "💰", text: "Livraison offerte" }
        ]
    },
    {
        id: 3,
        title: "Qualité Professionnelle",
        highlight: "MATÉRIAUX PREMIUM",
        description: "Fabriqué avec des normes de qualité exceptionnelles pour votre entreprise.",
        image: "/packedinPrintableDoypacks.png",
        cta: "Découvrir la qualité",
        features: [
            { icon: "✨", text: "Matériaux premium" },
            { icon: "🛡️", text: "Protection optimale" },
            { icon: "🏆", text: "Certifié ISO 9001" }
        ]
    }
]

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || index === currentIndex) return

        setIsTransitioning(true)
        setCurrentIndex(index)

        const timer = setTimeout(() => {
            setIsTransitioning(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [currentIndex, isTransitioning])

    const nextSlide = useCallback(() => {
        goToSlide((currentIndex + 1) % heroSlides.length)
    }, [currentIndex, goToSlide])

    const prevSlide = useCallback(() => {
        goToSlide((currentIndex - 1 + heroSlides.length) % heroSlides.length)
    }, [currentIndex, goToSlide])

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [nextSlide])

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Slides */}
            <div className="absolute inset-0">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <Image
                            src={slide.image}
                            alt=""
                            fill
                            className="object-cover"
                            priority={index === currentIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
                <div className="max-w-2xl">
                    {/* Highlight Tag */}
                    <span className="inline-block mb-6 px-4 py-2 bg-white text-green-600 text-sm font-semibold rounded-full shadow-md">
                        {heroSlides[currentIndex].highlight}
                    </span>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {heroSlides[currentIndex].title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                        {heroSlides[currentIndex].description}
                    </p>

                    {/* CTA Button */}
                    <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                        {heroSlides[currentIndex].cta}
                    </button>

                    {/* Features List */}
                    <div className="mt-12 flex flex-wrap gap-4">
                        {heroSlides[currentIndex].features.map((feature, i) => (
                            <div key={i} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="mr-2 text-lg">{feature.icon}</span>
                                <span className="text-white text-sm">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-8 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full text-green-600 shadow-md hover:bg-white transition-all hover:scale-110 active:scale-95"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full text-green-600 shadow-md hover:bg-white transition-all hover:scale-110 active:scale-95"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </section>
    )
}