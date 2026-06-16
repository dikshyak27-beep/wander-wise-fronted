import CustomButton from "../shared/CustomButton"


const Navbar = () => {
  return (
    <header className="px-20 py-4 flex justify-between items-center">
        {/* left part*/}
        <div>
            <h1 className="text-4xl 
            font-semibold">Wanderwise</h1>
        </div>
        {/* right part */}
        <div className='flex item-center gap-16'>
            <nav className='text-lg space-x-8'>
                <a herf="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>

           <CustomButton text="Login" link="/login" />

        </div>
    </header>
  )
}

export default Navbar