
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
        {/*Title*/}
        <h1 className='text-center text-2xl md:text-3x1 lg:text-4x1 mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text tex-transparent pyè6 md:py-16 '>See the magic. Try now</h1>
              
        <div className='text-center mb-24'>
           <input type="file" name='' id='upload2' hidden/>
           <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload2">
              <img width={20} src={assets.upload_btn_icon} alt="" />
              <p className='text-white text-sm'>Upload your image</p>

           </label>
           </div>

    </div>
  )
}

export default Upload
