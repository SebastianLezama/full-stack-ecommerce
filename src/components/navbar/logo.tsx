import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className="flex">
      <Link href={"/"} >
      <text >
        <text className='text-[22px] text-primaryColor font-bold'>
          TIENDA
          </text>
        <text className="text-[22px] text-stone-600 font-bold">DE</text>
        <text className='text-[22px] text-primaryColor font-bold'>CUADROS</text>
      </text>
    </Link>
      </div>
  )
}
