'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const navigation = [
    { name: 'Courses', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="inset-x-0 relative z-50">
        <nav className="flex items-center justify-between py-6 container mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className='font-bold'>MyPlace</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/registration" className="text-sm font-semibold leading-6 text-gray-900 x mr-10">
              Registration
            </Link>
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 x bg-black rounded-lg py-2 px-6 text-white -mt-3 hover:bg-transparent border hover:text-black border-black">
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
  )
}
