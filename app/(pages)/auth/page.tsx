"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Package } from "lucide-react"

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/app/components/authentication/LoginForm"
import { RegisterForm } from "@/app/components/authentication/RegisterForm"
import Navbar from "@/app/components/landing/Navbar"


const backgroundImages = [
    "https://blog.exaprint.fr/wp-content/uploads/2022/03/IMG_Tous-packaging-doypack-flexible.jpg",
    "https://www.advisuel.com/wp-content/uploads/2021/09/creation-graphique-doypack.jpg",
    "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/fr-fr/S001709114/NPIB-16970-Flex-Packaging-Hero-EU-003",
]

export default function AuthPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
        <div className='flex justify-center'>

        <Navbar/>
        </div>
        <div className="relative flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900 overflow-hidden">
            {/* Clear radial gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-teal-500/10 to-transparent opacity-70 dark:opacity-50"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-6xl"
            >
                {/* Fused Card with Image */}
                <div className="relative flex flex-col lg:flex-row bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                    {/* Form Section */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12">
                        <CardHeader className="space-y-1 px-0">
                            <div className="flex items-center gap-2 mb-2">
                                <Package className="h-6 w-6 text-emerald-600" />
                                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                                    Emballages Éco
                                </CardTitle>
                            </div>
                            <CardDescription className="text-gray-600 dark:text-gray-300">
                                Votre solution d&apos;emballage durable et personnalisée
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="px-0 pb-0">
                            <Tabs defaultValue="login" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                    <TabsTrigger
                                        value="login"
                                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 rounded-md"
                                    >
                                        Connexion
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="register"
                                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 rounded-md"
                                    >
                                        Inscription
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="login">
                                    <LoginForm />
                                </TabsContent>

                                <TabsContent value="register">
                                    <RegisterForm />
                                </TabsContent>
                            </Tabs>
                        </CardContent>

                        <CardFooter className="flex flex-col space-y-3 px-0 pt-6 pb-0">
                            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                                En continuant, vous acceptez nos{" "}
                                <Link
                                    href="/terms"
                                    className="font-medium text-emerald-600 hover:text-emerald-500 underline underline-offset-4"
                                >
                                    Conditions d&apos;utilisation
                                </Link>{" "}
                                et notre{" "}
                                <Link
                                    href="/privacy"
                                    className="font-medium text-emerald-600 hover:text-emerald-500 underline underline-offset-4"
                                >
                                    Politique de confidentialité
                                </Link>
                                .
                            </div>
                        </CardFooter>
                    </div>

                    {/* Image Section - Fused with Card */}
                    <div className="w-full lg:w-1/2 relative hidden lg:block">
                        <div className="absolute inset-0 overflow-hidden">
                            {backgroundImages.map((image, index) => (
                                <motion.div
                                    key={image}
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        opacity: index === currentImageIndex ? 1 : 0,
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                                    transition={{ duration: 1 }}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-800/30"></div>
                        </div>

                        <div className="relative h-full flex flex-col justify-end p-8 text-white">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <h3 className="text-2xl font-bold mb-3">Solutions d&apos;emballage innovantes</h3>
                                <p className="text-emerald-100/90 mb-4">
                                    Découvrez nos doypacks écologiques et nos solutions de packaging sur mesure pour votre entreprise.
                                </p>
                                <ul className="space-y-2 text-sm text-emerald-50/90">
                                    <li className="flex items-center gap-2">
                                        <Package className="h-4 w-4" />
                                        <span>Doypacks personnalisables</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Package className="h-4 w-4" />
                                        <span>Emballages 100% recyclables</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Package className="h-4 w-4" />
                                        <span>Solutions logistiques optimisées</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}