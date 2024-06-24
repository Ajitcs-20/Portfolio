import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
{
    title:"About",
    path: "#about",
}
,{
    title:"Project",
    path: "#project",
},
{
    title:"Contact",
    path: "#contact",
}
]
export default function Navbar() {
  return (
    <nav><div className="flex flex-wrap item-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold ">
        LOGO</Link>
        <div className="menu hidden md:block md:w-auto " ad="navbar">
            <ul>
                {
               navLinks.map((link, index) => (
                <li key={index}> 
                <NavLink href={link.path} title={link.title}/>{Link.title}</li>
               ))}
            </ul>
        </div>
        </div></nav>
  )
}
