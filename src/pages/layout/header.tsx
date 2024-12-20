import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <input
          type="text"
          placeholder="Search here..."
          className="px-4 py-2 border rounded-lg w-full max-w-md"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-200 rounded-full">🔔</button>
        <button className="p-2 bg-gray-200 rounded-full">⚙️</button>
        <img
          src="/path-to-user-avatar.jpg"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  )
}
