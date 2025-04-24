"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, User, X, ShoppingCart } from "lucide-react"

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const productCategories = [
        "KRAFTVIEW",
        "WHITEVIEW",
        "KRAFTALU",
        "FULLVIEWKRAFT™",
        "ALUVIEWBLACK™",
        "FULLVIEWALU™BLACK",
        "FULLTRANS™ FROSTED",
        "ALUVIEW™ SILVER GLOSSY",
    ]

    const marketCategories = [

        "ALIMENTATION",
        "CAFÉ",
        "COSMÉTIQUES",
        "COMPLÉMENTS",
        "LIQUIDES",
        "ALIMENTS POUR ANIMAUX",
        "INFUSIONS ET ÉPICES",
    ]


    return (
        <header className={`fixed top-4 sm:rounded-full rounded-lg z-50 transition-all duration-300 px-4 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
            <div className={`container mx-auto rounded-2xl border-none`}>
                <div className="flex items-center justify-between h-16 md:h-20 px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 group"
                        aria-label="Home"
                    >
                        <div className="relative h-10 w-32">
                            <Image
                                src="/cropped-packedIn-LOGO-FINAL-2021-BLACK-01.webp"
                                alt="Packedin Logo"
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <Link
                            href="/"
                            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-200"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/shop"
                            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-200"
                        >
                            Boutique
                        </Link>

                        {/* Collections Dropdown */}
                        <div className="relative group py-2">
                            <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-200 flex items-center">
                                Achetez par collection
                                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 pt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                                <div className="py-1 grid grid-cols-1 gap-1">
                                    {productCategories.map((category) => (
                                        <Link
                                            key={category}
                                            href={`/collection/${category.toLowerCase().replace(/[™®]/g, "").replace(/\s+/g, "-")}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors duration-150"
                                        >
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Collections Dropdown */}
                        <div className="relative group py-2">
                            <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-200 flex items-center">
                            Utilisations
                                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 pt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                                <div className="py-1 grid grid-cols-1 gap-1">
                                    {marketCategories.map((category) => (
                                        <Link
                                            key={category}
                                            href={`/collection/${category.toLowerCase().replace(/[™®]/g, "").replace(/\s+/g, "-")}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors duration-150"
                                        >
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <Link
                            href="/pourquoi-packedin"
                            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-200"
                        >
                            Pourquoi Packedin®?
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-3">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Rechercher..."
                                className="pl-4 pr-10 py-2 w-40 lg:w-56 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>

                        <Link href="/mon-compte" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                            <User className="h-5 w-5 text-gray-700" />
                        </Link>

                        <Link href="/panier" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                            <ShoppingCart className="h-5 w-5 text-gray-700" />
                            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                3
                            </span>
                        </Link>

                        <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 rounded-full text-white text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-green-500/30">
                            Préparer devis
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-3">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Search"
                        >
                            {isSearchOpen ? (
                                <X className="h-5 w-5 text-gray-700" />
                            ) : (
                                <Search className="h-5 w-5 text-gray-700" />
                            )}
                        </button>

                        <Link href="/panier" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                            <ShoppingCart className="h-5 w-5 text-gray-700" />
                            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5 text-gray-700" />
                            ) : (
                                <Menu className="h-5 w-5 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                {isSearchOpen && (
                    <div className="md:hidden py-3 px-4 transition-all duration-300 animate-fadeIn">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Rechercher des produits..."
                                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white rounded-xl shadow-xl mx-4 mb-4 p-6 animate-slideDown">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Accueil
                            </Link>
                            <Link
                                href="/shop"
                                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Boutique
                            </Link>

                            <div className="px-4 py-2">
                                <h3 className="font-medium text-gray-700 mb-2">Achetez par collection</h3>
                                <div className="grid gap-2 pl-2">
                                    {productCategories.map((category) => (
                                        <Link
                                            key={category}
                                            href={`/collection/${category.toLowerCase().replace(/[™®]/g, "").replace(/\s+/g, "-")}`}
                                            className="text-sm py-1.5 px-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/pourquoi-packedin"
                                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pourquoi Packedin®?
                            </Link>

                            <Link
                                href="/mon-compte"
                                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Mon Compte
                            </Link>

                            <div className="pt-2 space-y-2">
                                <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 rounded-full text-white font-medium hover:shadow-lg transition-all duration-200">
                                    Préparer devis
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}