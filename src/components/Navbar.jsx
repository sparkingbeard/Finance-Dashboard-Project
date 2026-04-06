import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import RoleSwitcher from './RoleSwitcher'
import { HiMenu } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Transactions', path: '/transactions' },
  { label: 'Insights', path: '/insights' },
]

const linkClasses = ({ isActive }) =>
  `px-3 py-1 rounded-md transition ${isActive
    ? 'bg-white text-black font-medium'
    : 'text-[#06080A] hover:text-gray-300'
  }`

function Navbar({ role, setRole }) {
  const [isOpen, setIsopen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-[#7297C5] p-4 flex items-center justify-between font-dm">
      {/* {Left section} */}
      <div className="left flex items-center gap-4">
        <div className="logo text-white font-semibold text-lg hover:cursor-pointer"
        onClick={() => navigate('/')}
        >Finance <span className='text-amber-200'>Tracker</span></div>

        <RoleSwitcher role={role} setRole={setRole} />
      </div>

      {/* {Right section} */}

      <div className="Right">
        <ul className="nav-links items-center gap-4 text-sm font-medium hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === '/'} className={linkClasses}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* {Hamburger button and menu for mobile} */}
        <div className="container relative">
        </div>
        <button
          className='md:hidden'
          onClick={() => setIsopen(prev => !prev)}
        ><HiMenu /></button>

        {isOpen && (
          <div className='absolute top-12 right-1 bg-[#7297C5] rounded-md p-4 flex flex-col items-start gap-2 z-10'>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === '/'} className={linkClasses} onClick={() => setIsopen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar