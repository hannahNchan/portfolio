import { useState } from 'react'
import Logo from './Logo.tsx'
import Container from './Container'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
<nav className="fixed top-0 left-0 right-0 bg-gray-900 z-50 border-b border-gray-800">
    <Container>
      <div className="relative flex h-16 items-center">

        <div className="flex flex-1 items-center gap-8">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white text-xl"
          >
            ☰
          </button>

          <div className="hidden lg:flex gap-8">
            <a className="text-sm font-semibold text-white hover:text-indigo-400">Showcase</a>
            <a className="text-sm font-semibold text-white hover:text-indigo-400">About</a>
            <a className="text-sm font-semibold text-white hover:text-indigo-400">Skills</a>
            <a className="text-sm font-semibold text-white hover:text-indigo-400">Projects</a>
            <a className="text-sm font-semibold text-white hover:text-indigo-400">Contact</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>

        <div className="flex flex-1 justify-end">
          <a className="text-sm font-semibold text-white hover:text-indigo-400">
            Log in →
          </a>
        </div>

      </div>
    </Container>
</nav>


      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 z-50">
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-800">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl"
            >
              ✕
            </button>
            <Logo />
            <a href="#login" className="text-sm font-semibold text-white">
              Log in →
            </a>
          </div>
          <div className="px-6 py-6 space-y-4">
            <a href="#product" className="block text-base font-semibold text-white hover:text-indigo-400">
              Product
            </a>
            <a href="#features" className="block text-base font-semibold text-white hover:text-indigo-400">
              Features
            </a>
            <a href="#company" className="block text-base font-semibold text-white hover:text-indigo-400">
              Company
            </a>
          </div>
        </div>
      )}
    </>
  )
}
