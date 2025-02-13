import React from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Searchbar = (props: Props) => {
  return (
    <div className='flex items-center p-2 rounded-full max-md:hidden bg-gray-100'>
      <button><BiSearch size={20} className='opacity-50' /></button>
      <input type="text" className='outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]' placeholder='Search' autoComplete='false' />
    </div>
  )
}

export default Searchbar