import Link from 'next/link'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Overview from './Overview'
import Member from './Member'
import Withdraw from './Withdraw'
interface ActiveTabPops {
  label: string
  // eslint-disable-next-line no-undef
  component: JSX.Element
}
export default function Info() {
  const [activeTab, setActiveTab] = useState<string>('overview')

  const tabs: Record<string, ActiveTabPops> = {
    overview: {
      label: 'overview',
      component: <Overview />,
    },
    member: {
      label: 'Thay đổi mật khẩu',
      component: <Member />,
    },
    withdraw: {
      label: 'Biến động số dư',
      component: <Withdraw />,
    },
    onlinehistory: {
      label: 'Lịch sử Online',
      component: <Overview />,
    },
  }

  const activeTabContent = tabs[activeTab]
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start w-full bg-white p-6 rounded-lg">
        <span className="font-medium text-base">Tiếp Thị Liên Kết</span>
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
            <Link href="#">Tiếp Thị Liên Kết</Link>
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col overflow-x-hidden">
        <div className="w-full inline-flex gap-8 font-medium mb-6 bg-white rounded-lg p-6">
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('overview')}
          >
            Tổng Quan
          </button>
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('member')}
          >
            Thành Viên
          </button>
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('withdraw')}
          >
            Rút tiền
          </button>
          <button
            className="hover:text-[#2196f3]"
            onClick={() => setActiveTab('onlinehistory')}
          >
            Lịch sử Online
          </button>
        </div>
        {activeTabContent.component}
      </div>
    </div>
  )
}
