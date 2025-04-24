"use client"

import Image from "next/image"
import { Star, ShoppingCart, ArrowRight } from "lucide-react"

export default function ProductShowcase() {
    const products = [
        {
            id: 1,
            name: "KRAFTVIEW Premium",
            category: "Emballage Écologique",
            price: "45,99 DT",
            oldPrice: "59,99 DT",
            rating: 4.8,
            image: "/packedinKraftView.png",
            colors: ["#5C3D2E", "#A67C52", "#D9B38C"],
            isNew: true,
            isBestSeller: true
        },
        {
            id: 2,
            name: "WHITEVIEW Pro",
            category: "Emballage Professionnel",
            price: "52,99 DT",
            oldPrice: "",
            rating: 4.6,
            image: "/packedinKraftView.png",
            colors: ["#FFFFFF", "#F5F5F5", "#E0E0E0"],
            isNew: false,
            isBestSeller: true
        },
        {
            id: 3,
            name: "KRAFTALU Industriel",
            category: "Solution Durable",
            price: "68,50 DT",
            oldPrice: "75,00 DT",
            rating: 4.9,
            image: "/packedinKraftView.png",
            colors: ["#3E3E3E", "#5C5C5C", "#7D7D7D"],
            isNew: true,
            isBestSeller: false
        },
        {
            id: 4,
            name: "FULLVIEWKRAFT™",
            category: "Transparence Totale",
            price: "39,99 DT",
            oldPrice: "",
            rating: 4.7,
            image: "/packedinKraftView.png",
            colors: ["#E8D5B5", "#F0E5D1", "#F8F2E7"],
            isNew: false,
            isBestSeller: false
        },
        {
            id: 5,
            name: "ALUVIEWBLACK™",
            category: "Style Moderne",
            price: "72,25 DT",
            oldPrice: "89,99 DT",
            rating: 4.5,
            image: "/packedinKraftView.png",
            colors: ["#000000", "#1A1A1A", "#333333"],
            isNew: false,
            isBestSeller: true
        },
        {
            id: 6,
            name: "FULLVIEWALU™ BLACK",
            category: "Élégance Professionnelle",
            price: "65,00 DT",
            oldPrice: "",
            rating: 4.8,
            image: "/packedinKraftView.png",
            colors: ["#212121", "#424242", "#616161"],
            isNew: true,
            isBestSeller: false
        },
        {
            id: 7,
            name: "FULLTRANS™ FROSTED",
            category: "Protection Discrète",
            price: "48,75 DT",
            oldPrice: "55,00 DT",
            rating: 4.4,
            image: "/packedinKraftView.png",
            colors: ["#E0E0E0", "#EEEEEE", "#FAFAFA"],
            isNew: false,
            isBestSeller: false
        },
        {
            id: 8,
            name: "ALUVIEW™ SILVER",
            category: "Brillance Métallique",
            price: "59,99 DT",
            oldPrice: "69,99 DT",
            rating: 4.7,
            image: "/packedinKraftView.png",
            colors: ["#C0C0C0", "#D3D3D3", "#E5E5E5"],
            isNew: true,
            isBestSeller: true
        },
        {
            id: 9,
            name: "ECO-PACK DELUXE",
            category: "Solution Verte",
            price: "42,50 DT",
            oldPrice: "49,99 DT",
            rating: 4.9,
            image: "/packedinKraftView.png",
            colors: ["#4CAF50", "#66BB6A", "#81C784"],
            isNew: false,
            isBestSeller: true
        }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos Produits <span className="text-green-600">Premium</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre sélection exclusive d&apos;emballages haut de gamme pour votre entreprise
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Product Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {product.isNew && (
                                        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Nouveau
                                        </span>
                                    )}
                                    {product.isBestSeller && (
                                        <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Best-seller
                                        </span>
                                    )}
                                </div>

                                {/* Quick Add to Cart */}
                                <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all hover:scale-110">
                                    <ShoppingCart size={18} />
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                        <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                        <span className="ml-1 text-gray-700">{product.rating}</span>
                                    </div>
                                </div>

                                {/* Color Options */}
                                <div className="mt-4 flex items-center">
                                    <span className="text-sm text-gray-500 mr-2">Couleurs:</span>
                                    <div className="flex space-x-1">
                                        {product.colors.map((color, i) => (
                                            <div
                                                key={i}
                                                className="h-5 w-5 rounded-full border border-gray-200"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Price & CTA */}
                                <div className="mt-6 flex items-center justify-between">
                                    <div>
                                        <span className="text-xl font-bold text-gray-900">{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="ml-2 text-sm text-gray-500 line-through">{product.oldPrice}</span>
                                        )}
                                    </div>
                                    <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                                        Voir détails
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
                        Voir tous nos produits
                    </button>
                </div>
            </div>
        </section>
    )
}