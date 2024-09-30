import React from 'react'

import Link from 'next/link'

export default function NavLink({ href, title}) {
  return (
    <Link href={href}   className={`block py-2 pl-3 pr-4 hover:text-white ${
       title.id === href ? "text-white" : "text-[#ADB7BE]"
    }`}
  >
      {title}
    </Link>
  )
}
