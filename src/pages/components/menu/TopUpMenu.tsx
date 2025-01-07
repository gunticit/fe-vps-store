import React from 'react'
import { PiCubeDuotone } from '@/components/data/homePageAPI/MenuIcons'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

interface TopUpMenuProps {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
}
interface NavigateProps {
  title: string
  lastnavigate: string
}
export const Navigate = ({ title, lastnavigate }: NavigateProps) => {
  return (
    <div className="flex flex-row md:flex-col gap-2 items-center md:items-start w-full bg-white p-6 rounded-lg">
      <span className="font-medium text-base">{title}</span>
      <div className="inline-flex gap-2">
        <span className="text-xs">
          <Link href="#" className="inline-flex items-center">
            Home <IoIosArrowForward />
          </Link>
        </span>
        <span className="text-xs">
          <Link href="#" className="inline-flex items-center">
            Bảng điều khiển <IoIosArrowForward />
          </Link>
        </span>
        <span className="text-xs">
          <Link href="#">{lastnavigate}</Link>
        </span>
      </div>
    </div>
  )
}
const TopUpMenu: React.FC<TopUpMenuProps> = ({
  title,
  description,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <nav className="w-full h-48 md:h-56 bg-blue-500 rounded-lg flex flex-col p-6 gap-2 mt-4">
      <span className="font-medium text-md">{title}</span>
      <span className="opacity-75 text-sm">{description}</span>
      <a
        href={buttonLink}
        className="rounded-md bg-white text-blue-600 p-2 px-4 w-fit text-md font-medium inline-flex items-center gap-1"
      >
        <PiCubeDuotone />
        {buttonLabel}
      </a>
    </nav>
  )
}

export default TopUpMenu
