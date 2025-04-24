"use client";

import Image from "next/image";
import { ChevronRight, Package, Check, Zap } from "lucide-react";

export default function ZipBagsSection() {
    const variants = [
        {
            name: "KraftView™",
            description:
                "Pochette Kraft brun hermétique avec laminage intérieur barrière, fermeture Zip et fenêtre transparente",
            features: [
                "Apparence naturelle et écologique",
                "Protection contre l'humidité",
                "Visibilité du produit",
            ],
            image: "/cropped-PackedIn-doypack-kraft.webp",
        },
        {
            name: "WhiteView™",
            description:
                "Pochette Kraft blanc hermétique avec laminage intérieur barrière, fermeture Zip et fenêtre mate",
            features: [
                "Surface blanche pour une impression premium",
                "Barrière contre l'oxygène",
                "Fenêtre mate pour une présentation élégante",
            ],
            image: "/cropped-PackedIn-doypack-kraft-blanc.webp",
        },
        {
            name: "KraftAlu™",
            description:
                "Pochette Kraft brun avec laminage intérieur aluminium pour protection UV et longue conservation",
            features: [
                "Protection contre la lumière",
                "Conservation prolongée",
                "Aucune fenêtre pour protection maximale",
            ],
            image: "/cropped-PackedIn-doypack-kraft-Alum.webp",
        },
        {
            name: "FullViewKraft™",
            description:
                "Pochette alimentaire zip avec face avant transparente et face arrière en Kraft laminé",
            features: [
                "Visibilité inégalée du produit",
                "Hermétique et sécurisée",
                "Apparence professionnelle",
            ],
            image: "/cropped-Doypack-Tunisie-Kraft-ecologique-1.webp",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Zap className="h-4 w-4 mr-2" />
                        INNOVATION PACKEDIN®
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos <span className="text-green-600">ZIPBAGS®</span> Professionnels
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Solution d&apos;emballage hermétique, refermable et thermoscellable pour
                        marques exigeantes
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left">
                        <p className="text-gray-700">
                            <span className="font-semibold">ZIPBAGS®</span> (connus sous le
                            nom de Doypack de packedIn®) sont disponibles en différentes
                            tailles et finitions pour répondre à tous vos besoins d&apos;emballage
                            flexible tout en conservant une qualité premium.
                        </p>
                    </div>
                </div>

                {/* Product Variants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {variants.map((variant, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image */}
                                <div className="md:w-2/5 relative h-64 md:h-auto">
                                    <Image
                                        src={variant.image}
                                        alt={variant.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="md:w-3/5 p-6 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                                        <Package className="h-5 w-5 text-green-600 mr-2" />
                                        {variant.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{variant.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {variant.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="mt-auto flex items-center text-green-600 hover:text-green-700 font-medium">
                                        En savoir plus
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Avantages des ZIPBAGS®
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start">
                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    Fermeture Sécurisée
                                </h4>
                                <p className="text-gray-600">
                                    Zip hermétique garantissant une protection optimale de vos
                                    produits
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    Personnalisation
                                </h4>
                                <p className="text-gray-600">
                                    Options d&apos;impression haute qualité pour votre branding
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    Multi-Usage
                                </h4>
                                <p className="text-gray-600">
                                    Adapté aux produits alimentaires, cosmétiques et industriels
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center">
                        Demander un devis personnalisé
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
