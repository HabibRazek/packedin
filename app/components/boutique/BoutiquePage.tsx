"use client"

import { useState, useEffect } from 'react'
import FiltersSidebar from './FiltersSidebar'
import ProductCard from './ProductCard'
import Pagination from './Pagination'


export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [filters, setFilters] = useState({
        category: '',
        priceRange: [0, 1000] as [number, number], // Explicitly type as tuple
        inStock: false
    })
    const productsPerPage = 12

    // Fetch products (in a real app, this would be an API call)
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            // Mock data - replace with actual API call
            const mockProducts: Product[] = [
                // Array of product objects would go here
                // Example:
                {
                    id: 1,
                    name: "ZIPBAG® Standard 250ml",
                    price: 2.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: true,
                    rating: 4.5
                },
                {
                    id: 2,
                    name: "ZIPBAG® Standard 500ml",
                    price: 3.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: true,
                    rating: 4.7
                },
                {
                    id: 3,
                    name: "ZIPBAG® Standard 1L",
                    price: 4.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: false,
                    rating: 4.8
                },
                {
                    id: 4,
                    name: "ZIPBAG® Standard 2L",
                    price: 5.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: true,
                    rating: 4.6
                },
                {
                    id: 5,
                    name: "ZIPBAG® Standard 5L",
                    price: 6.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: true,
                    rating: 4.9
                },
                {
                    id: 6,
                    name: "ZIPBAG® Standard 10L",
                    price: 7.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: false,
                    rating: 4.4
                },
                {
                    id: 7,
                    name: "ZIPBAG® Standard 20L",
                    price: 8.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: true,
                    rating: 4.3
                },
                {
                    id: 8,
                    name: "ZIPBAG® Standard 50L",
                    price: 9.99,
                    category: "food",
                    image: "/packedinKraftView.png",
                    inStock: true,
                    rating: 4.2
                }
                
            ]
            setProducts(mockProducts)
            setFilteredProducts(mockProducts)
            setLoading(false)
        }

        fetchProducts()
    }, [])

    // Apply filters
    useEffect(() => {
        let results = [...products]

        // Category filter
        if (filters.category) {
            results = results.filter(p => p.category === filters.category)
        }

        // Price range filter
        results = results.filter(p =>
            p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
        )

        // In stock filter
        if (filters.inStock) {
            results = results.filter(p => p.inStock)
        }

        setFilteredProducts(results)
        setCurrentPage(1) // Reset to first page when filters change
    }, [filters, products])

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Banner */}
            <div className="bg-green-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Boutique ZIPBAGS®</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Découvrez notre gamme complète de solutions d&apos;emballage innovantes
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="md:w-1/4">
                        <FiltersSidebar
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="md:w-3/4">
                    

                        {/* Results Info */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                {filteredProducts.length} produits trouvés
                            </p>
                            <div className="flex items-center gap-2">
                                <label htmlFor="sort" className="text-gray-600">Trier par:</label>
                                <select
                                    id="sort"
                                    className="border rounded px-3 py-1 bg-white"
                                // Add sorting logic here
                                >
                                    <option value="price-asc">Prix (Croissant)</option>
                                    <option value="price-desc">Prix (Décroissant)</option>
                                    <option value="popular">Plus populaires</option>
                                    <option value="newest">Nouveautés</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {loading ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse"></div>
                                ))}
                            </div>
                        ) : currentProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {currentProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    Aucun produit trouvé
                                </h3>
                                <p className="text-gray-500">
                                    Essayez d&apos;ajuster vos filtres de recherche
                                </p>
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredProducts.length > productsPerPage && (
                            <div className="mt-12">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Product {
    id: number
    name: string
    price: number
    category: string
    image: string
    inStock: boolean
    rating?: number
}