import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import Info from './info'
import { useState } from 'react'
import Changepassword from './changepassword'
import BalanceHistory from './balancehistory'
import Onlinehistory from './onlinehistory'

interface ActiveTabPops {
  firstnavigation: string
  lastnavigation: string
  label: string
  // eslint-disable-next-line no-undef
  component: JSX.Element
}

export default function Account() {
  const [activeTab, setActiveTab] = useState<string>('info')

  const tabs: Record<string, ActiveTabPops> = {
    info: {
      firstnavigation: 'Thông tin tài khoản',
      lastnavigation: 'Thông tin cá nhân',
      label: 'Thông tin của bạn',
      component: <Info />,
    },
    changepassword: {
      firstnavigation: 'Change Password',
      lastnavigation: 'Thay đổi mật khẩu',
      label: 'Thay đổi mật khẩu',
      component: <Changepassword />,
    },
    balancehistory: {
      firstnavigation: 'Biến động số dư',
      lastnavigation: 'Biến động số dư',
      label: 'Biến động số dư',
      component: <BalanceHistory />,
    },
    onlinehistory: {
      firstnavigation: 'Lịch sử hoạt động',
      lastnavigation: 'Lịch sử Online',
      label: 'Lịch sử Online',
      component: <Onlinehistory />,
    },
  }

  const activeTabContent = tabs[activeTab]
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start w-full bg-white p-6 rounded-lg">
        <span className="font-medium text-base">
          {activeTabContent.firstnavigation}
        </span>
        <div>
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
            <Link href="#">{activeTabContent.lastnavigation}</Link>
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col rounded-lg p-6 bg-white overflow-x-hidden">
        <span className="text-xl font-medium">{activeTabContent.label}</span>
        <div className="border w-full my-6"></div>
        <div className="w-full inline-flex gap-8 font-medium">
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('info')}
          >
            Thông tin
          </button>
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('changepassword')}
          >
            Thay đổi mật khẩu
          </button>
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('balancehistory')}
          >
            Biến động số dư
          </button>
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('onlinehistory')}
          >
            Lịch sử Online
          </button>
        </div>
        <div className="border w-full my-4"></div>
        {activeTabContent.component}
      </div>
    </div>
  )
}
