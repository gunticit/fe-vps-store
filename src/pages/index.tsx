// import React, { useEffect, useRef, useState } from 'react'
// import Menu from './components/menu'
// import Header from './components/header'
// import MainContents from './components/main/MainContents'
// import Footer from './components/footer'
// import Link from 'next/link'

// export default function AdminDashboard() {
//   const [menuOpen, setMenuOpen] = useState(true)
//   const [isClient, setIsClient] = useState(false)
//   const menuRef = useRef(null)
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen)
//   }
//   useEffect(() => {
//     setIsClient(true)
//     const handleResize = () => {
//       if (window.innerWidth < 1280) {
//         setMenuOpen(false)
//       }
//     }
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target as Node) &&
//         window.innerWidth < 1280
//       ) {
//         setMenuOpen(false)
//       }
//     }

//     window.addEventListener('resize', handleResize)
//     window.addEventListener('mousedown', handleClickOutside)
//     handleResize()
//     return () => {
//       window.removeEventListener('resize', handleResize)
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   if (!isClient) {
//     return null
//   }
//   return (
//     <div className="flex h-full bg-white overflow-hidden">
//       <div
//         ref={menuRef}
//         className={`h-full bg-white transition-all ${
//           menuOpen
//             ? 'xl:z-10 xl:pointer-events-auto'
//             : 'z-0 pointer-events-none'
//         }`}
//       >
//         {menuOpen && <Menu />}
//       </div>
//       <div
//         className={`flex-1 transition-all  ${
//           menuOpen ? 'xl:opacity-95 xl:blur-sm' : 'opacity-100'
//         }`}
//       >
//         <div className={`fixed top-0 right-0 w-full`}>
//           <Header onMenuToggle={toggleMenu} isMenuOpen={menuOpen} />
//         </div>
//         <div
//           className={`${
//             menuOpen ? 'w-10/12 xl:w-full p-2 xl:p-0' : 'w-full'
//           } md:p-4 xl:p-2 mt-20 flex ml-auto`}
//         >
//           <MainContents />
//           <Link href="/components/tets">aaaa</Link>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   )
// }
import MainContents from './components/main/MainContents'

export default function AdminDashboard() {
  return <MainContents />
}
