import TextField from '@/components/ui/TextField'
import { PiListBold } from 'react-icons/pi'
import { HiOutlineAdjustments } from 'react-icons/hi'
import SearchBar from './SearchBar'
import Notifications from './Notifications'
import Languages from './Languages'
import NavbarMenu from './NavbarMenu'
import Auth from './Auth'
interface HeaderProps {
  onMenuToggle: () => void
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white p-4 w-full h-20">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="p-2 bg-violet-200 text-violet-900 rounded-md hover:bg-violet-900 hover:text-white z-20"
        >
          <PiListBold className="w-4 h-4" />
        </button>
        <button className="z-20 hidden md:block">
          <SearchBar />
        </button>
        <div className="flex items-center space-x-2 md:hidden">
          <div className="relative w-full">
            <TextField.Input
              type="text"
              placeholder="Search here..."
              className="pr-8 py-3 h-5/6 border rounded-lg w-full focus-within:ring-1 ring-blue-400"
            />
            <HiOutlineAdjustments className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 rounded-md p-2 h-8 w-8 bg-violet-200 text-violet-900 hover:text-white hover:bg-violet-900 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 z-20">
        <NavbarMenu />
        <div className="z-20">
          <Languages />
        </div>
        <div className="z-20">
          <Notifications />
        </div>
        <div className="z-20">
          <Auth />
        </div>
      </div>
    </header>
  )
}
