import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text, color, link}) => {

  const navigate =useNavigate();
  const handleclick =() => {
    if(link){
      navigate(link);
    }
  }

  return (
    <button onClick={handleclick} className='bg-blue-700 px-4 py-1 rounded-sm
      text-white cursor-pointer
             hover:bg-blue-400'>
        {text}
    </button>
  )
}

export default CustomButton