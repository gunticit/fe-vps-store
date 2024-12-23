import React from 'react'
import { PiCubeDuotone } from '../../modals/MenuIcons'

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
    <nav className="w-full h-48 bg-blue-500 rounded-lg flex flex-col p-6 gap-2">
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
