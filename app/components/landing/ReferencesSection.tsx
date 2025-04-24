"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ReferencesSection() {
    const brands = [
        { id: 1, name: "Kartago", logo: "/Kartago-logo.webp" },
        { id: 2, name: "Le Pannier", logo: "/le-pannier-logo.webp" },
        { id: 3, name: "Masmoudi", logo: "/Masmoudi-logo.webp" },
        { id: 4, name: "My Oya", logo: "/My-Oya-logo-packedin.webp" },
        { id: 5, name: "SNO", logo: "/sno.png" }
    ]

    // Triple the array for smoother looping
    const triplicatedBrands = [...brands, ...brands, ...brands]

    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const scrollSpeed = 1 // pixels per frame

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animationId: number
        let lastTimestamp: number | null = null
        const direction = 1 // 1 for forward, -1 for backward if you want alternating

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp
            const deltaTime = timestamp - lastTimestamp
            lastTimestamp = timestamp

            if (!isHovered && container) {
                const maxScroll = container.scrollWidth - container.clientWidth
                const currentScroll = container.scrollLeft

                // Calculate new scroll position
                let newScroll = currentScroll + (scrollSpeed * direction * deltaTime / 16)

                // Seamlessly loop back when reaching the end
                if (newScroll >= maxScroll) {
                    newScroll = 0
                } else if (newScroll <= 0) {
                    newScroll = maxScroll
                }

                container.scrollLeft = newScroll
            }

            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [isHovered])

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos <span className="text-green-600">Références</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez quelques-unes des marques prestigieuses qui nous font confiance
                    </p>
                </div>

                {/* Auto-scrolling Brands */}
                <div className="relative overflow-hidden py-4">
                    <div
                        ref={containerRef}
                        className="flex overflow-x-auto scrollbar-hide"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            scrollBehavior: isHovered ? 'smooth' : 'auto',
                        }}
                    >
                        {triplicatedBrands.map((brand, index) => (
                            <div
                                key={`${brand.id}-${index}`}
                                className="flex-shrink-0 px-8 flex items-center"
                            >
                                <div className="relative h-20 w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100px, 160px"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Testimonial */}
                <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
                    <blockquote className="text-lg text-gray-700 italic mb-4">
                        &ldquo;PackedIn nous fournit des solutions d&apos;emballage innovantes depuis plus de 3 ans.
                        Leur professionnalisme et la qualité de leurs produits sont exceptionnels.&rdquo;
                    </blockquote>
                    <p className="font-semibold text-gray-900">-- Directeur Marketing, Le Pannier --</p>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}