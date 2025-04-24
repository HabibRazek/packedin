import React from 'react'
import Navbar from '@/app/components/landing/Navbar'
import ShopPage from '@/app/components/boutique/BoutiquePage'

const page = () => {
    return (
        <div>
            <div className='flex justify-center mb-32'>
                <Navbar />
            </div>
            <ShopPage />
        </div>
    )
}

export default page