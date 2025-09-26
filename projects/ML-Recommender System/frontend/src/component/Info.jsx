import React from 'react'

const Info = () => {
  return (
    <div className=' h-[100vh]  w-full flex flex-col justify-evenly items-center '>
        <h1 className='text-4xl  font-bold text-[#28D4F0]'>    Welcome to <strong className='text-amber-50'>rcmndr.</strong></h1>
        <h1 className='text-4xl font-bold text-[#687CFC]'> Discover <q className=''>trending</q> movies and <q>personalized</q> recommendations.
        </h1>
      <div className='border-2 shadow-[0_0_20px_#28D4F0]/40 p-4 h-[40vh] w-[70vw] text-amber-50 mt-4'>
      <p className="text-4xl font-bold">
      This site helps you discover movies you’ll love.  
      Just tell us <span class="font-semibold text-[#28D4F0]">one movie you like</span>,  
      and we’ll recommend new ones based on its  
      <span class="italic text-[#687CFC]"> genre, director, actors,</span> and even the story description.
    </p>
      </div>
      <div className='border-2 shadow-[0_0_20px_#28D4F0]/40 p-4 h-[40vh] w-[70vw] text-amber-50 mt-6 mb-6'>
      <h2 className="text-3xl font-bold mb-4">How it Works</h2>
      <ul className="list-disc list-inside text-left text-4xl font bolder">
      <li>Enter a movie you like</li>
      <li>We analyze its genre, cast, and storyline</li>
      <li>Get personalized recommendations instantly</li>
    </ul>
      </div>
    </div>
  )
}

export default Info
