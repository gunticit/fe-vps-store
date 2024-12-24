import React, { useEffect, useRef, useState } from 'react'
import Menu from './components/menu/menu'
import Header from './components/header/header'
import Link from 'next/link'

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const menuRef = useRef(null)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  useEffect(() => {
    setIsClient(true)
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
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <div className="flex h-screen">
      <div
        ref={menuRef}
        className={`xl:block xl:fixed xl:top-0 xl:left-0 h-full bg-white transition-all ${
          menuOpen
            ? 'xl:z-10 xl:pointer-events-auto'
            : 'z-0 pointer-events-none'
        }`}
      >
        {menuOpen && (
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 bg-white w-fit px-4 xl:w-64"
            />
            <Menu />
          </div>
        )}
      </div>
      <div
        className={`flex-1 bg-gray-100 transition-all  ${
          menuOpen ? 'xl:opacity-95 xl:blur-sm' : 'opacity-100'
        }`}
      >
        <div>
          <Header onMenuToggle={toggleMenu} />
        </div>
        <main className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">Gói Hosting</h2>
              <Link
                href="/admin"
                className="hover:bg-violet-200 hover:text-violet-900 p-2 inline-flex items-center gap-4 w-full rounded-md"
              >
                Chính sách
              </Link>
              <p className="text-gray-500">0 Gói Hosting Đã Mua</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">Gói VPS</h2>
              <p className="text-gray-500">0 Gói VPS Đã Mua</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">Tài Liệu</h2>
              <p className="text-gray-500">0 Tài Liệu Đã Mua</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
