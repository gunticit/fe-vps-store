import React, { useEffect, useRef, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchBar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const menuRef = useRef(null)
  useEffect(() => {
    setIsClient(true)
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        window.innerWidth < 1280
      ) {
        setIsPanelOpen(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!isClient) {
    return null
  }
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  return (
    <div ref={menuRef}>
      <button
        onClick={togglePanel}
        className="p-2 rounded-lg bg-violet-200 text-violet-900 hover:bg-violet-900 hover:text-white"
      >
        <FaMagnifyingGlass />
      </button>

      {isPanelOpen && (
        <div className="absolute p-2 left-4 bg-white shadow-lg rounded-lg mt-10 w-11/12 inline-flex items-center gap-2">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-2 rounded-md focus:outline-none"
          />
        </div>
      )}
    </div>
  )
}

export default SearchBar
