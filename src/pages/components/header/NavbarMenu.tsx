import React, { useState } from 'react'
import { TbApps } from 'react-icons/tb'

const Notifications = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }
  const Notifi = [
    { title: 'Vàng tăng giá', detail: 'Vàng 1 tỉ 1 cân', date: '11/12/2024' },
    {
      title: 'Mạnh có người yêu',
      detail: 'Ai thì chưa biết',
      date: '16/03/2003',
    },
  ]
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
        <div className="absolute right-10 bg-white shadow-lg rounded-lg p-4 mt-4 max-w-6xl w-full xl:w-11/12 flex flex-row">
          <ul className="pt-5">
            {Notifi.map((notification, index) => (
              <li
                key={index}
                className="p-2 border-gray-300 inline-flex gap-2 items-center"
              >
                <div>
                  <div className="font-bold">{notification.title}</div>
                  <div className="text-sm text-gray-500">
                    {notification.detail}
                  </div>
                  <div className="text-xs text-gray-400">
                    {notification.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="pt-5">
            {Notifi.map((notification, index) => (
              <li
                key={index}
                className="p-2 border-gray-300 inline-flex gap-2 items-center"
              >
                <div>
                  <div className="font-bold">{notification.title}</div>
                  <div className="text-sm text-gray-500">
                    {notification.detail}
                  </div>
                  <div className="text-xs text-gray-400">
                    {notification.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="pt-5">
            {Notifi.map((notification, index) => (
              <li
                key={index}
                className="p-2 border-gray-300 inline-flex gap-2 items-center"
              >
                <div>
                  <div className="font-bold">{notification.title}</div>
                  <div className="text-sm text-gray-500">
                    {notification.detail}
                  </div>
                  <div className="text-xs text-gray-400">
                    {notification.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="pt-5">
            {Notifi.map((notification, index) => (
              <li
                key={index}
                className="p-2 border-gray-300 inline-flex gap-2 items-center"
              >
                <div>
                  <div className="font-bold">{notification.title}</div>
                  <div className="text-sm text-gray-500">
                    {notification.detail}
                  </div>
                  <div className="text-xs text-gray-400">
                    {notification.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Notifications
