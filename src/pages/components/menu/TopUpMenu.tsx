import React from 'react'
import { PiCubeDuotone } from '@/components/data/homePageAPI/MenuIcons'

interface TopUpMenuProps {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
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
