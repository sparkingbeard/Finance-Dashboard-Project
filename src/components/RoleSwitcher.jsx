import React from 'react'

function RoleSwitcher({role, setRole}) {
  return (
    <button
    onClick={()=> setRole(role === 'Admin'? 'Viewer' : 'Admin')}
    className='bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-md hover:bg-white/20 transition'
    >
        {role}
    </button>
  )
}

export default RoleSwitcher