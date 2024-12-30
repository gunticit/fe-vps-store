import Link from 'next/link'
import React, { useState } from 'react'
import { LuSettings } from 'react-icons/lu'
import { useAuth } from '@/hooks/useAuth'
import { FaHistory } from 'react-icons/fa'
import { MdPriceChange } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { BsCurrencyDollar } from '@/components/data/homePageAPI/MenuIcons'

const Auth = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }
  const { user, signOut } = useAuth()
  if (!user) {
    return <p>Loading...</p>
  }
  return (
    <div>
      {/* Button để mở panel */}
      <button
        onClick={togglePanel}
        className="p-1 px-3 rounded-full inline-flex items-center gap-2 bg-blue-100 md:p-1 md:w-12 md:h-12"
      >
        <img
          src="https://thuvienanime.net/wp-content/uploads/2024/02/tao-dinh-cao-ying-thuvienanime-thumb.jpg"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
        <LuSettings className="w-5 h-5 text-blue-500 md:hidden" />
      </button>

      {isPanelOpen && (
        <div className="absolute right-5 bg-white rounded-lg p-4 w-80 md:w-11/12 shadow-xl mt-3 md:text-3xl">
          <ul>
            <li className="mb-2 p-4">
              <div>
                <span className="text-lg font-medium md:text-4xl">
                  Xin chào,{' '}
                </span>
                <span className="text-gray-600"> {user?.name || 'N/A'}</span>
              </div>
              <span className="inline-flex gap-2 text-gray-600">
                Số dư: <p className="text-red-600">0đ</p>
              </span>
            </li>
            <div className="w-full border"></div>
            <li className="flex flex-col gap-3 text-base p-4 px-6 md:text-4xl md:p-10 md:gap-10">
              <Link
                href="#"
                className="text-gray-900 inline-flex gap-2 items-center"
              >
                <RxAvatar />
                Thông Tin Cá Nhân
              </Link>
              <Link
                href="#"
                className="text-gray-900 inline-flex gap-2 items-center"
              >
                <div className="w-fit">
                  <BsCurrencyDollar className="bg-gray-400 rounded w-4/5" />
                </div>
                Nạp Tiền Tài Khoản
              </Link>
              <Link
                href="#"
                className="text-gray-900 inline-flex gap-2 items-center"
              >
                <MdPriceChange />
                Biến Động Số Dư
              </Link>
              <Link
                href="#"
                className="text-gray-900 inline-flex gap-2 items-center"
              >
                <FaHistory />
                Lịch Sử Hoạt Động
              </Link>
            </li>
            <div className="w-full border"></div>
            <li>
              <button className="w-full mt-4 items-start" onClick={signOut}>
                Đăng Xuất Tài Khoản
                <a href="auth/signin"></a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Auth
