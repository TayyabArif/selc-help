import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
 const router = useRouter()
  return (
    <header className='w-full lg:block hidden'>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
        <div class="flex justify-between items-center mx-auto">
            <p  class="flex items-center cursor-pointer">
                <img src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png" class="mr-3 h-6 sm:h-9" alt="Logo" onClick={() => router.push('/')}/>
            </p>
            <div class="relative flex items-center lg:order-2">
                <a href="#" class="text-primary dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login Help</a>
                <a href="#" class="text-primary dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">MS Login Help</a>
                <a href="#" class="text-primary dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Contact</a>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header
