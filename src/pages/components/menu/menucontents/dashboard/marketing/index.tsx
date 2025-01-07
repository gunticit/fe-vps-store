import { useState } from 'react'
import Overview from './Overview'
import Member from './Member'
import Withdraw from './Withdraw'
import History from './History'
import { Navigate } from '../../../TopUpMenu'
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
      component: <History />,
    },
  }

  const activeTabContent = tabs[activeTab]
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <Navigate title="Tiếp Thị Liên Kết" lastnavigate="Tiếp Thị Liên Kết" />
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
