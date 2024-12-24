import Link from 'next/link'
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineInsertChart,
} from 'react-icons/md'
import { TbCoin } from 'react-icons/tb'
import { RxAvatar } from 'react-icons/rx'
const LeftContent = () => {
  const detailData = (count: number, label: string, color: string) => (
    <div
      className={`flex flex-col gap-2 justify-center items-center text-white p-7 rounded-lg ${color}`}
    >
      <span>{count}</span>
      <span>{label}</span>
    </div>
  )
  const moneyDetail = (
    count: number | string,
    label: string,
    // eslint-disable-next-line no-undef
    Icon: React.ElementType,
    cssIcon: string,
    css: string,
    bg: string,
  ) => (
    <div
      className={`flex flex-row gap-8 justify-between items-center bg-white p-6 px-6 w-full text-sm ${css}`}
    >
      <div className={`p-2 ${bg} rounded-lg`}>
        <Icon className={`${cssIcon}`} />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-medium">
          {count}
          {typeof count === 'number' ? 'đ' : ''}
        </span>
        <span>{label}</span>
      </div>
    </div>
  )
  return (
    <div className="w-4/12 gap-6 flex flex-col">
      <div>
        <div className="flex flex-row">
          <Link href="#" className=" w-1/2 h-full">
            {moneyDetail(
              0,
              'SỐ DƯ',
              MdOutlineAccountBalanceWallet,
              'text-violet-900 h-5 w-5',
              'rounded-tl-lg border-b border-r',
              'bg-violet-200',
            )}
          </Link>
          <Link href="#" className="w-1/2 h-full">
            {moneyDetail(
              0,
              'TỔNG NẠP',
              MdOutlineInsertChart,
              'text-red-500 h-5 w-5',
              'rounded-tr-lg border-b',
              'bg-red-100',
            )}
          </Link>
        </div>
        <div className="flex flex-row">
          <Link href="#" className=" w-1/2 h-full">
            {moneyDetail(
              0,
              'CHI TIÊU',
              TbCoin,
              'text-green-600 h-5 w-5',
              'rounded-bl-lg border-r',
              'bg-green-200',
            )}
          </Link>
          <Link href="#" className=" w-1/2 h-full">
            {moneyDetail(
              'Member',
              'CHỨC VỤ',
              RxAvatar,
              'text-blue-500 h-5 w-5',
              'rounded-br-lg',
              'bg-blue-100',
            )}
          </Link>
        </div>
      </div>
      <div>{detailData(1438, 'Tổng thành viên', 'bg-violet-900')}</div>
      <div>{detailData(0, 'Đơn hàng Hosting đã bán', 'bg-blue-600')}</div>
      <div>{detailData(360, 'Đơn hàng VPS đã bán', 'bg-green-600')}</div>
      <div>{detailData(36, 'Đơn hàng Mã Nguồn đã bán', 'bg-black')}</div>
      <div>{detailData(1, 'Đơn hàng Cron đã bán', 'bg-yellow-500')}</div>
    </div>
  )
}

export default LeftContent
