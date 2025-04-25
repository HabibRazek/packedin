"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,

    ChevronLeft,
    Menu,
    X
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname()

    const toggleSidebar = () => setIsCollapsed(!isCollapsed)
    const closeMobileSidebar = () => setMobileOpen(false)

    const navItems = [
        {
            name: "Dashboard",
            href: "/admin",
            icon: LayoutDashboard,
            active: pathname === "/admin"
        },
        {
            name: "Produits",
            href: "/admin/products",
            icon: Package,
            active: pathname.includes("/admin/products")
        },
        {
            name: "Commandes",
            href: "/admin/orders",
            icon: ShoppingCart,
            active: pathname.includes("/admin/orders")
        },
        {
            name: "Clients",
            href: "/admin/customers",
            icon: Users,
            active: pathname.includes("/admin/customers")
        },
    ]

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile sidebar toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="bg-white dark:bg-gray-800"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 z-40 h-screen transition-all duration-300 ease-in-out
            ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            ${isCollapsed ? "w-20" : "w-64"} 
            border-r bg-white dark:bg-gray-800 dark:border-gray-700`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo - Reduced padding */}
                    <div className={`flex items-center ${isCollapsed ? "justify-center p-3" : "justify-between p-3"}`}>
                        {!isCollapsed && (
                            <Link href="/admin" className="flex items-center gap-2">
                                <Image
                                    src="/cropped-packedIn-LOGO-FINAL-2021-BLACK-01.webp"
                                    alt="Logo"
                                    className="h-7 w-auto"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        )}
                        {isCollapsed && (
                            <Image
                                src="/cropped-packedIn-LOGO-FINAL-2021-BLACK-01.webp"
                                alt="Logo"
                                className="h-7 w-auto"
                                width={50}
                                height={50}
                            />
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleSidebar}
                            className="hidden lg:flex h-8 w-8"
                        >
                            <ChevronLeft className={`h-3 w-3 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
                        </Button>
                    </div>

                    <Separator className="my-1" /> {/* Reduced margin */}

                    {/* Navigation - Reduced padding */}
                    <nav className="flex-1 px-1 py-2 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMobileSidebar}
                                className={`flex items-center rounded-lg px-2 py-2 text-sm font-medium transition-colors
                    ${item.active
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-100"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"}
                    ${isCollapsed ? "justify-center" : ""}`}
                            >
                                <item.icon className="h-4 w-4" />
                                {!isCollapsed && <span className="ml-2">{item.name}</span>}
                            </Link>
                        ))}
                    </nav>

                    <Separator className="my-1" /> {/* Reduced margin */}

                    {/* Profile - Reduced padding */}
                    <div className={`p-2 ${isCollapsed ? "flex justify-center" : ""}`}>
                        <Link
                            href="/admin/profile"
                            className={`flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700
                ${pathname.includes("/admin/profile") ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                            onClick={closeMobileSidebar}
                        >
                            <Avatar className="h-7 w-7">
                                <AvatarImage src="/avatar.png" />
                                <AvatarFallback>AD</AvatarFallback>
                            </Avatar>
                            {!isCollapsed && (
                                <div className="text-xs">
                                    <p className="font-medium">Admin</p>
                                    <p className="text-gray-500 dark:text-gray-400">Administrateur</p>
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main content - Reduced padding */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out 
        ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
            >
                {/* Mobile overlay */}
                {mobileOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 lg:hidden z-30"
                        onClick={closeMobileSidebar}
                    />
                )}

                {/* Content - Reduced padding */}
                <main className="flex-1 p-4 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}