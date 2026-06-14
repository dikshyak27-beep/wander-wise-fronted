import React from 'react'

const Hero = () => {
  return (
    <section className="relative">
        <div className="h-[90vh] overflow-hidden flex items-center">
            <img src="/hero image.jpg" alt="wanderwise hero" />
        </div>

        <div className=
        "bg-black opacity-20 h-[90vh] w-full absolute top-0">
            
        </div>

        <div className="absolute top-0 "> 
          <div className='w-1/2 mx-auto mt-40' >
          <h1 className='text-4xl text-white font-bold '> plan your trip with wanderwise</h1>
          <p className='text-xl text-white font-medium mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam laboriosam numquam consequatur cum eveniet, placeat culpa voluptatibus nisi beatae delectus porro adipisci, amet similique! Rem reiciendis eveniet vel ipsa!
          </p>
        </div>
        </div>
    </section>
  )
}

export default Hero