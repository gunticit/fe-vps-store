import { order, service, utilities } from '@/pages/modals/NavbarMenuItems'
import Link from 'next/link'
import React, { useState } from 'react'
import { TbApps } from 'react-icons/tb'

const Notifications = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }
  const renderMenuItem = (
    label: string,
    items: { link: string; label: string }[],
  ) => (
    <ul className="mt-2 border-gray-200 pl-8 list-disc border-l md:border-none ml-4 h-full text-gray-600 md:text-black">
      <div className=" space-y-4">
        <h1 className="font-medium text-md">{label}</h1>
        {items.map((item, index) => (
          <li key={index} className="py-1 cursor-pointer text-sm">
            <div className="flex flex-row justify-between hover:text-violet-900">
              <Link href={item.link}>{item.label}</Link>
            </div>
          </li>
        ))}
      </div>
    </ul>
  )
  return (
    <div>
      {/* Button để mở panel */}
      <button
        onClick={togglePanel}
        className="p-2 rounded-lg bg-violet-200 text-violet-900 hover:bg-violet-900 hover:text-white"
      >
        <TbApps />
      </button>

      {isPanelOpen && (
        <div className="absolute right-10 md:right-0 bg-white shadow-lg rounded-lg p-4 mt-4 max-w-6xl w-full xl:w-11/12 md:w-full flex flex-row md:flex-col md:gap-6">
          <ul className="w-1/4 p-2 items-start md:w-full">
            <img src="/logo.png" alt="logo" className="w-full" />
          </ul>
          <ul className="w-1/4 md:w-full">
            {renderMenuItem('Dịch vụ', service)}
          </ul>
          <ul className="w-1/4 md:w-full">
            {renderMenuItem('Đơn hàng', order)}
          </ul>
          <ul className="w-1/4 md:w-full">
            {renderMenuItem('Tiện ích', utilities)}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Notifications
