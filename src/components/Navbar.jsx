
import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
import { NavLink, Link} from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = React.useState(false)

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'COLLECTION', path: '/collection' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ]

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <img
        src={assets.logo}
        className='w-35'
        alt='Forever Logo'
      />

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className='flex flex-col items-center gap-1'
          >
            {({ isActive }) => (
              <>
                <p>{item.name}</p>
                <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? 'block' : 'hidden'}`} />
              </>
            )}
          </NavLink>
        ))}

      </ul>

      {/* Right Side Icons */}
      <div className='flex items-center gap-6'>

        {/* Search */}
        <img
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='Search Icon'
        />

        {/* Profile Dropdown */}
        <div className='group relative'>

          <img
            className='w-5 cursor-pointer'
            src={assets.profile_icon}
            alt='Profile Icon'
          />

          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10'>

            <div className='flex flex-col gap-2 w-36 py-3 px-4 bg-slate-100 text-gray-500 rounded'>

              <p className='cursor-pointer hover:text-black'>
                My Profile
              </p>

              <p className='cursor-pointer hover:text-black'>
                Orders
              </p>

              <p className='cursor-pointer hover:text-black'>
                Logout
              </p>

            </div>
          </div>

        </div>
        <Link to='/cart' className='relative'>
          <img
            src={assets.cart_icon}
            className='w-5  min-w-5'
            alt='Cart Icon'
           />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            0
          </p>
        </Link>
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu Icon'
        />
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-y-auto bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
              <div className='flex flex-col text-gray-600'>
                  <div onClick={()=>setVisible}className= 'flex item-center gap-4 p-3' >
                      <img className='h-4 rotate-180'src={assets.dropdown_icon}alt ="" />
                      <p>back</p>
                  </div>
                  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/'>HOME</NavLink>
                  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                  




              </div> 
      </div>


    </div>
  )
}

export default Navbar
