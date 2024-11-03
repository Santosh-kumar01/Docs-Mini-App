import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"

function Card(data) {
  return (
    
    <motion.div drag  className=' relative h-56 w-48 rounded-[50px] bg-sky-900/90 text-white px-6 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'> welcome to hit haldia in purba medinipur</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex items-center justify-between  px-8 py-4 mb-3'>
                <h5>.4mb</h5>
                <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosCloseCircleOutline /> : <FiDownload  size=".7em " color='#000'/>}
                
                
                </span>
                
            </div>
            
            <div className='tag w-full py-2 bg-green-600 flex items-center justify-center'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>

    </motion.div>
    
    
    
  )
}

export default Card