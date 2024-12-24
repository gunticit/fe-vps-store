import React, { useState } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'

const Languages = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }
  return (
    <div>
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
          <select className="pt-2 flex flex-col w-full">
            <option value="en">Tiếng Anh</option>
            <option value="vi">Tiếng Việt</option>
            <option value="fr">Tiếng Pháp</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default Languages
