import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setMenuOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        window.innerWidth < 1280
      ) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousedown', handleClickOutside)

    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex h-full bg-white overflow-hidden">
      <div
        ref={menuRef}
        className={`h-full bg-white transition-all ${
          menuOpen
            ? 'xl:z-10 xl:pointer-events-auto'
            : 'z-0 pointer-events-none'
        }`}
      >
        {menuOpen && <Menu />}
      </div>
      <div
        className={`flex-1 transition-all ${
          menuOpen ? 'xl:opacity-95 xl:blur-sm' : 'opacity-100'
        }`}
      >
        <div className="fixed top-0 right-0 w-full">
          <Header onMenuToggle={toggleMenu} isMenuOpen={menuOpen} />
        </div>
        <div
          className={`${
            menuOpen ? 'w-10/12 bg-gray-100 xl:w-full xl:p-0' : 'w-full'
          } md:p-4 xl:p-2 mt-20 flex ml-auto rounded-lg p-6`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
