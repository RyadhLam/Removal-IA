// eslint-disable-next-line no-unused-vars
import React from 'react'
import { testimonialsData } from '../assets/assets'


const Testimonials = () => {
  return (
    <div>


      {/* Title */}

         <h1 className='text-center text-2xl md:text-3x1 lg:text-4x1 mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text tex-transparent py-5'>Customer Testimonials</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4x1 mx-auto py-4 p-8 '>

            {testimonialsData.map((item,index)=>(
              <div className='bg-white rounded-x1 p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700' key={index}>
                <p className='text-4x1 text-gray-500'></p>
                <p className='text-sm text-gray-500'>{item.text}</p>
                <div className='flex items-center gap-3 mt-5'>
                  <img className='w-9 rounded-full' src={item.image} alt="" />
                  <div>
                    <p>{item.author}</p>
                    <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                  </div>
                </div>
              </div>
            ))}



           </div>

    </div>
  )
}

export default Testimonials
