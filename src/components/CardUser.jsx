import React from 'react'

export default function CardUser() {
  return (
<div class="max-w-sm bg-white ml-40 shadow-lg rounded-lg overflow-hidden my-4">
        <img class="w-full h-56 object-cover object-center"
        src='https://img.icons8.com/?size=160&id=QMuDJby5eC7X&format=png'
        className='w-32' 
         alt="avatar" />
       <hr></hr>
        <div class="py-4 px-6">
            <h6 class="text-2xl font-semibold text-gray-800">Patterson johnson</h6>
            <p>Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
          <hr />
            <div class="flex items-center mt-4 text-gray-700">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                </svg>
                <h1 class="px-2 text-sm">patterson@example.com</h1>
            </div>
        </div>
    </div>
  )
}
