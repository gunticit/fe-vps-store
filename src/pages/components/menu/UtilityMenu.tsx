import React from 'react'
import {
  TbFlag3Filled,
  TiDownload,
  PiCardsDuotone,
} from '../../modals/MenuIcons'
import Link from 'next/link'

interface UtilityMenuProps {
  title: string
}

const UtilityMenu: React.FC<UtilityMenuProps> = ({ title }) => {
  return (
    <nav className="space-y-2">
      <h1 className="text-black font-medium">{title}</h1>
      <ul className="space-y-1 text-[#616161]">
        <li>
          <Link
            href="/admin"
            className="hover:bg-violet-200 hover:text-violet-900 p-2 inline-flex items-center gap-4 w-full rounded-md"
          >
            <TbFlag3Filled />
            Chính sách
          </Link>
        </li>
        <li>
          <Link
            href="/admin/hosting"
            className="hover:bg-violet-200 hover:text-violet-900 p-2 inline-flex items-center gap-4 w-full rounded-md"
          >
            <TiDownload />
            Download
          </Link>
        </li>
        <li>
          <Link
            href="/admin/vps"
            className="hover:bg-violet-200 hover:text-violet-900 p-2 inline-flex items-center gap-4 w-full rounded-md"
          >
            <PiCardsDuotone />
            Websit Proxy, 4G VPN
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default UtilityMenu
