import React, { useState } from 'react'
import { HiMiniPresentationChartLine } from 'react-icons/hi2'
import { IoIosArrowForward } from 'react-icons/io'
import { addMoneyItems, dashboardMenuItems } from '../../modals/MenuContents'
import Link from 'next/link'
import {
  BsCurrencyDollar,
  LuChartNoAxesCombined,
} from '@/pages/modals/MenuIcons'

export default function DashboardMenu() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [activeContent, setActiveContent] = useState(false)
  return (
    <nav className="space-y-2">
      <h1 className="text-black font-medium">Bảng hệ thống</h1>
      <ul className="space-y-1 text-[#616161]">
        <li>
          <button
            className="hover:bg-violet-200 hover:text-violet-900 p-2 rounded-md inline-flex items-center w-full justify-between"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <div className="inline-flex items-center gap-4">
              <HiMiniPresentationChartLine />
              Bảng Điều Khiển
            </div>
            <IoIosArrowForward
              className={`ml-auto transition-transform ${
                activeMenu ? 'rotate-90' : 'rotate-0'
              }`}
            />
          </button>
          {activeMenu && (
            <ul className="mt-2 border-gray-200 space-y-2 pl-8 list-disc border-l ml-4">
              {dashboardMenuItems.map((item, index) => (
                <li key={index} className="py-1 cursor-pointer w-full">
                  <div className="flex flex-row justify-between hover:text-violet-900">
                    <Link href={item.link}>{item.label}</Link>
                    {item.label === 'Nạp Tiền' && (
                      <button
                        className="hover:text-violet-900 px-2 rounded-md"
                        onClick={() => setActiveContent(!activeContent)}
                      >
                        <IoIosArrowForward
                          className={`ml-auto transition-transform ${
                            activeContent ? 'rotate-90' : 'rotate-0'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.label === 'Nạp Tiền' && (
                    <div>
                      {activeContent && (
                        <ul className="mt-2 space-y-2 pl-8 list-disc border-l -ml-4">
                          {addMoneyItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="py-1 hover:text-violet-900 cursor-pointer"
                            >
                              <Link href={subItem.link}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            className="hover:bg-violet-200 hover:text-violet-900 p-2 rounded-md inline-flex items-center w-full justify-between"
            href="#"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-fit">
                <BsCurrencyDollar className="bg-gray-400 rounded w-4/5" />
              </div>
              Mã giảm giá
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-violet-200 hover:text-violet-900 p-2 rounded-md inline-flex items-center w-full justify-between"
            href="#"
          >
            <div className="inline-flex items-center gap-4">
              <LuChartNoAxesCombined />
              Tiếp thị liên kết
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
