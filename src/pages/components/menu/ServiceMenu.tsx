import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import {
  hostingMenuItems,
  vpsMenuItems,
  sourceMenuItems,
  cronJobsMenuItems,
  hostingListItems,
  vpsListItems,
  sourceListItems,
} from '../../modals/MenuContents'
import { FaShoppingBasket } from '../../modals/MenuIcons'
import Link from 'next/link'

interface ServiceMenuProps {
  title: string
}

const ServiceMenu: React.FC<ServiceMenuProps> = ({ title }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeContent, setActiveContent] = useState(false)

  const toggleMenu = (menuId: string) => {
    setActiveMenu((prev) => (prev === menuId ? null : menuId))
  }

  const toggleSubContent = () => {
    setActiveContent((prev) => !prev)
  }

  const getSubItems = (label: string) => {
    if (label === 'Danh sách Hosting') return hostingListItems
    if (label === 'Danh sách VPS') return vpsListItems
    if (label === 'Kho mã nguồn') return sourceListItems
    return []
  }

  const renderMenuItem = (
    menuId: string,
    label: string,
    items: { link: string; label: string }[],
  ) => (
    <li>
      <button
        className="hover:bg-violet-200 hover:text-violet-900 p-2 rounded-md inline-flex items-center w-full justify-between"
        onClick={() => toggleMenu(menuId)}
      >
        <div className="inline-flex items-center gap-4">
          <FaShoppingBasket />
          {label}
        </div>
        <IoIosArrowForward
          className={`ml-auto transition-transform ${
            activeMenu === menuId ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </button>
      {activeMenu === menuId && (
        <ul className="mt-2 border-gray-200 space-y-2 pl-8 list-disc border-l ml-4">
          {items.map((item, index) => (
            <li key={index} className="py-1 cursor-pointer">
              <div className="flex flex-row justify-between hover:text-violet-900">
                <Link href={item.link}>{item.label}</Link>
                {[
                  'Danh sách Hosting',
                  'Danh sách VPS',
                  'Kho mã nguồn',
                ].includes(item.label) && (
                  <button
                    className="hover:text-violet-900 px-2 rounded-md"
                    onClick={toggleSubContent}
                  >
                    <IoIosArrowForward
                      className={`ml-auto transition-transform ${
                        activeContent ? 'rotate-90' : 'rotate-0'
                      }`}
                    />
                  </button>
                )}
              </div>
              {['Danh sách Hosting', 'Danh sách VPS', 'Kho mã nguồn'].includes(
                item.label,
              ) &&
                activeContent && (
                  <div>
                    <ul className="mt-2 space-y-2 pl-8 list-disc border-l -ml-4">
                      {getSubItems(item.label).map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 hover:text-violet-900 cursor-pointer"
                        >
                          <Link href={subItem.link}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </li>
          ))}
        </ul>
      )}
    </li>
  )

  return (
    <nav className="space-y-2">
      <h1 className="text-black font-medium">{title}</h1>
      <ul className="space-y-1 text-[#616161]">
        {renderMenuItem('hostingMenu', 'Mua Hosting', hostingMenuItems)}
        {renderMenuItem('vpsMenu', 'Mua VPS', vpsMenuItems)}
        {renderMenuItem('sourceMenu', 'Mua mã nguồn', sourceMenuItems)}
        {renderMenuItem('cronJobsMenu', 'Cron Jobs', cronJobsMenuItems)}
      </ul>
    </nav>
  )
}

export default ServiceMenu
