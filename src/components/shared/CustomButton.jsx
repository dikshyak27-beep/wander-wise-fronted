

const CustomButton = ({text}) => {
  return (
    <button className='bg-blue-700 px-4 py-1 rounded-sm
             text-white cursor-pointer
             hover:bg-blue-400'>
        {text}
    </button>
  )
}

export default CustomButton
