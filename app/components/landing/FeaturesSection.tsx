"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, RefreshCw, Shield, TrendingUp, DollarSign, Package } from "lucide-react"

export default function FeaturesSection() {
    const features = [
        {
            id: 1,
            title: "Réutilisable et refermable",
            description: "Les pochettes ZIPBAGS® sont réutilisables et refermables pour de multiples utilisations gardant le contenu frais et exempt d'odeurs, d'humidité et d'oxygène dans un environnement hermétique.",
            icon: <RefreshCw className="w-8 h-8" />
        },
        {
            id: 2,
            title: "Thermoscellable",
            description: "Les sacs thermoscellés offrent une finition inviolable à laquelle les clients s'attendent. Le thermoscellage prolonge la durée de conservation du produit, maintient la fraîcheur et garantit la sécurité alimentaire.",
            icon: <Shield className="w-8 h-8" />
        },
        {
            id: 3,
            title: "Impact d'étagère",
            description: "Nos designs premium attirent l'œil en rayon avec des finitions métallisées, des fenêtres transparentes et des impressions haute définition qui mettent en valeur votre produit.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            id: 4,
            title: "Économies de coûts",
            description: "Les pochettes ZIPBAGS® offrent une solution d'emballage tout-en-un; aucun bouchon, couvercle ou insert requis. L'emballage flexible coûte généralement trois à six fois moins cher par unité qu'un emballage rigide.",
            icon: <DollarSign className="w-8 h-8" />
        },
        {
            id: 5,
            title: "Commodité client",
            description: "Les consommateurs apprécient la commodité. Nos sachets debout sont conçus avec des encoches de déchirure faciles à ouvrir, des fermetures à glissière hermétiques refermables et prennent moins de place sur les étagères.",
            icon: <Package className="w-8 h-8" />
        },
        {
            id: 6,
            title: "Frais d'entreposage et d'expédition",
            description: "Nos pochettes ZIPBAGS® sont expédiés et stockés à plat, ce qui nécessite beaucoup moins d'espace d'entrepôt. La légèreté des sacs réduit considérablement les coûts d'expédition.",
            icon: <CheckCircle className="w-8 h-8" />
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const featureVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <Zap className="w-4 h-4" />
                        Solution innovante
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Nous proposons l&apos;une des solutions d&apos;emballage<br className="hidden lg:block" /> les <span className="text-green-600">plus efficaces</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Les pochettes ZIPBAGS® offrent de nombreuses fonctionnalités et avantages pour améliorer votre gamme de produits.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={featureVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-50 text-green-600 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Pourquoi choisir ZIPBAGS® ?</h3>
                        <p className="text-lg md:text-xl opacity-90 mb-8">
                            Notre technologie d&apos;emballage flexible révolutionne la conservation des produits tout en réduisant votre impact environnemental et vos coûts logistiques.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold">3-6x</div>
                                <div className="text-sm opacity-80">Moins cher que l&apos;emballage rigide</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">+30%</div>
                                <div className="text-sm opacity-80">Durée de conservation</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">70%</div>
                                <div className="text-sm opacity-80">Réduction d&apos;espace de stockage</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm opacity-80">Recyclable</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}