import React, { useState } from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import { IoLanguageOutline } from 'react-icons/io5'

const Languages = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }
  const Languages = ['Vietnamese', 'Thailand', 'English']
  return (
    <div>
      {/* Button để mở panel */}
      <button
        onClick={togglePanel}
        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white"
      >
        <IoLanguageOutline />
      </button>

      {isPanelOpen && (
        <div className="absolute right-28 bg-white shadow-lg rounded-lg p-4 mt-4 w-64">
          <span className="font-bold text-xl text-violet-900 pb-4">
            Ngôn ngữ
          </span>
          <span className="w-full border flex mt-4"></span>
          <ul className="pt-2 flex flex-col">
            {Languages.map((notification, index) => (
              <button
                key={index}
                className="p-2 border-gray-300 inline-flex gap-2 items-center"
              >
                <span className="rounded-full p-2 bg-blue-300 text-blue-600 w-8 h-8">
                  <HiOutlineBell />
                </span>
                {notification}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Languages
