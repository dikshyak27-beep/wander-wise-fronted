
const Navbar = () => {
  return (
    <header className="px-20 py-4 flex justify-between">
        {/* left part*/}
        <div>
            <h1 className='text-4xl 
            font-semibold'>Wanderwise</h1>
        </div>
        {/* right part */}
        <div className='flex items-center gap-16'>
            <nav className='text-lg space-x-8'>
                <a herf="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <button className='bg-blue-700 px-4 py-1 rounded-sm
             text-white cursor-pointer
             hover:bg-blue-400'>
                Login
            </button>

        </div>
    </header>
  )
}

export default Navbar
