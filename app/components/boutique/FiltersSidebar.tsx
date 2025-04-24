"use client"

import { Slider } from "@/components/ui/slider"

interface FiltersSidebarProps {
    filters: {
        category: string
        priceRange: [number, number]
        inStock: boolean
    }
    setFilters: React.Dispatch<React.SetStateAction<{
        category: string
        priceRange: [number, number]
        inStock: boolean
    }>>
}

export default function FiltersSidebar({ filters, setFilters }: FiltersSidebarProps) {
    const collections = [
        { id: 'kraftview', name: 'KRAFTVIEW' },
        { id: 'whiteview', name: 'WHITEVIEW' },
        { id: 'kraftalu', name: 'KRAFTALU' },
        { id: 'fullviewkraft', name: 'FULLVIEWKRAFT™' },
        { id: 'aluviewblack', name: 'ALUVIEWBLACK™' },
        { id: 'fullviewalublack', name: 'FULLVIEWALU™BLACK' },
        { id: 'fulltransfrosted', name: 'FULLTRANS™ FROSTED' },
        { id: 'aluviewsilver', name: 'ALUVIEW™ SILVER GLOSSY' }
    ]

    const usages = [
        { id: 'alimentation', name: 'ALIMENTATION' },
        { id: 'cafe', name: 'CAFÉ' },
        { id: 'cosmetiques', name: 'COSMÉTIQUES' },
        { id: 'complements', name: 'COMPLÉMENTS' },
        { id: 'liquides', name: 'LIQUIDES' },
        { id: 'animaux', name: 'ALIMENTS POUR ANIMAUX' },
        { id: 'infusions', name: 'INFUSIONS ET ÉPICES' }
    ]

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
            <h3 className="font-bold text-lg mb-6">Filtres</h3>

            {/* Collections Filter */}
            <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-3">Collections</h4>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {collections.map(collection => (
                        <div key={collection.id} className="flex items-center">
                            <input
                                type="radio"
                                id={`col-${collection.id}`}
                                name="collection"
                                checked={filters.category === collection.id}
                                onChange={() => setFilters({ ...filters, category: collection.id })}
                                className="h-4 w-4 text-green-600 focus:ring-green-500"
                            />
                            <label htmlFor={`col-${collection.id}`} className="ml-3 text-gray-700 text-sm">
                                {collection.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Usages Filter */}
            <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-3">Utilisations</h4>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {usages.map(usage => (
                        <div key={usage.id} className="flex items-center">
                            <input
                                type="radio"
                                id={`use-${usage.id}`}
                                name="usage"
                                checked={filters.category === usage.id}
                                onChange={() => setFilters({ ...filters, category: usage.id })}
                                className="h-4 w-4 text-green-600 focus:ring-green-500"
                            />
                            <label htmlFor={`use-${usage.id}`} className="ml-3 text-gray-700 text-sm">
                                {usage.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Categories Option */}
            <div className="mb-8">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="cat-all"
                        name="category"
                        checked={!filters.category}
                        onChange={() => setFilters({ ...filters, category: '' })}
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="cat-all" className="ml-3 text-gray-700">
                        Toutes catégories
                    </label>
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-3">Fourchette de prix</h4>
                <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters({ ...filters, priceRange: value as [number, number] })}
                    min={0}
                    max={1000}
                    step={10}
                    className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                    <span>{filters.priceRange[0]} €</span>
                    <span>{filters.priceRange[1]} €</span>
                </div>
            </div>

            {/* Availability */}
            <div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="in-stock"
                        checked={filters.inStock}
                        onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="in-stock" className="ml-3 text-gray-700">
                        En stock seulement
                    </label>
                </div>
            </div>

            {/* Reset Button */}
            <button
                onClick={() => setFilters({
                    category: '',
                    priceRange: [0, 1000],
                    inStock: false
                })}
                className="mt-8 text-green-600 hover:text-green-800 text-sm font-medium"
            >
                Réinitialiser les filtres
            </button>
        </div>
    )
}