import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 w-screen'>
        <h1>Hello <br/> <span className='text-2xl font-bold'>Shahbaz Ali 🙋‍♂️</span> </h1>
        <button>Logout</button>
    </div>
  )
}

export default Header