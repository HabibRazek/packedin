import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface ProductCardProps {
    product: {
        id: number
        name: string
        price: number
        image: string
        inStock: boolean
        rating?: number
    }
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
            <Link href={`/products/${product.id}`} className="block">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                                Rupture de stock
                            </span>
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                        {product.rating && (
                            <>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm ml-1 text-gray-600">
                                        {product.rating}
                                    </span>
                                </div>
                                <span className="mx-2 text-gray-300">|</span>
                            </>
                        )}
                        {product.inStock ? (
                            <span className="text-green-600 text-sm">En stock</span>
                        ) : (
                            <span className="text-red-500 text-sm">Rupture</span>
                        )}
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                        {product.price.toFixed(2)} €
                    </p>
                </div>
            </Link>
        </div>
    )
}