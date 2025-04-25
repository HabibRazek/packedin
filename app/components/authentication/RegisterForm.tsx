"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1500)
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="company">Full Name</Label>
                        <Input
                            id="company"
                            placeholder="Votre entreprise"
                            required
                            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 h-11 rounded-lg"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email-register">Email professionnel</Label>
                        <Input
                            id="email-register"
                            type="email"
                            placeholder="contact@entreprise.com"
                            required
                            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 h-11 rounded-lg"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password-register">Mot de passe</Label>
                        <Input
                            id="password-register"
                            type="password"
                            required
                            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 h-11 rounded-lg"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-medium"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Création...
                            </>
                        ) : (
                            "Créer un compte"
                        )}
                    </Button>
                </div>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-3 text-gray-500 dark:text-gray-400">
                        Ou continuer avec
                    </span>
                </div>
            </div>

            <Button
                variant="outline"
                className="w-full h-11 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium"
                type="button"
            >
                <FcGoogle className="mr-3 h-5 w-5" />
                Continuer avec Google
            </Button>
        </div>
    )
}