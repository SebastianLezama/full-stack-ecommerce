'use client'
import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navLinks = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Productos',
    href: '/products',
  },
  {
    text: 'Carrito',
    href: '/cart'
  }
]

const svgLinks = [
  {
    href: "/favs",
    alt: "Favoritos",
    img: "https://icongr.am/fontawesome/heart-o.svg?size=28&color=5592aa",
    fullImg: "https://icongr.am/fontawesome/heart.svg?size=28&color=44403c"
  },
  {
    href: "/cart",
    alt: "Carrito",
    img: "https://icongr.am/fontawesome/shopping-cart.svg?size=30&color=5592aa",
    fullImg: "https://icongr.am/fontawesome/shopping-cart.svg?size=30&color=44403c"
  },
]

export default function Header() {
  const path = usePathname()
  return (
    <header className="flex justify-between items-center py-8 px-7 border-b w-full">
      <nav className="flex gap-8 ">
      <Logo />
        <ul className="flex gap-x-6 text-[18px] items-center">
      {navLinks.map((link)=> <li key={link.text}><Link className={`${link.href == path ? "text-stone-800" : "text-stone-400"}`} href={link.href}>{link.text}</Link></li>)}

        </ul>
      </nav>
      <nav className="flex gap-4">
      {svgLinks.map((svg)=> <Link key={svg.alt} href={svg.href}><Image alt={svg.alt} width={30} height={30} src={`${svg.href == path ? svg.fullImg : svg .img}`} /></Link>)}
      </nav>
    </header>
  )
}
