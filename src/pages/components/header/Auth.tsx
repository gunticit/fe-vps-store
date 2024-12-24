import { User } from '@/types/user'
import Link from 'next/link'
import React, { useState } from 'react'
import { LuSettings } from 'react-icons/lu'

const Auth = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
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
        <div className="absolute right-5 bg-white shadow-lg rounded-lg p-4 mt-4 w-64">
          <span className="font-bold text-xl text-violet-900 border-b py-4">
            {!isLogin ? 'Thông tin tài khoản' : 'Đăng nhập / Đăng kí'}
          </span>
          <ul className="pt-5">
            {!isLogin ? (
              <>
                <li className="mb-2">
                  <span className="text-sm">Tên người dùng:</span>
                  <span className="font-medium"> {user?.name || 'N/A'}</span>
                </li>
                <li>
                  <Link href="/auth/settings" className="text-blue-500">
                    Cài đặt tài khoản
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/auth/signup" className="text-blue-500">
                    Đăng kí tài khoản
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signin" className="text-blue-500">
                    Đăng nhập
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Auth
