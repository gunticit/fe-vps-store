import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { FaDatabase, FaLaptopCode } from 'react-icons/fa'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { useState } from 'react'
import RightContent from './RightContents'
import LeftContent from './LeftContent'
type InfoCardProps = {
  title: string
  count: number
  description: string
  // eslint-disable-next-line no-undef
  Icon: React.ElementType
}
const InfoCard = ({ title, count, description, Icon }: InfoCardProps) => {
  return (
    <div className="w-1/4 rounded-lg bg-white h-full p-4 inline-flex justify-between items-center font-medium">
      <div className="flex flex-col gap-3">
        <span>{title}</span>
        <span>{count}</span>
        <span>{description}</span>
      </div>
      <span className="p-3 bg-blue-200 rounded-full">
        <Icon className="text-blue-500" />
      </span>
    </div>
  )
}
export default function MainContents() {
  const [isVisible, setIsVisible] = useState(true)
  const handleClose = () => {
    setIsVisible(!isVisible)
  }
  const data = [
    {
      title: 'Gói hosting',
      count: 0,
      description: 'Gói hosting đã mua',
      Icon: FaDatabase,
    },
    {
      title: 'Gói VPS',
      count: 0,
      description: 'Gói VPS đã mua',
      Icon: AiOutlineCloudServer,
    },
    {
      title: 'Tài liệu',
      count: 0,
      description: 'Tài liệu đã mua',
      Icon: SlEnvolopeLetter,
    },
    {
      title: 'Mã nguồn',
      count: 0,
      description: 'Mã nguồn đã mua',
      Icon: FaLaptopCode,
    },
  ]
  const infoData = {
    image: '/discount.png',
    name: 'Manh',
    date: '01/01/2025',
  }
  return (
    <main className="p-6 px-3 flex flex-col gap-6 w-full">
      <div className="flex flex-row gap-2 items-center w-full bg-white p-4 rounded-lg">
        <span className="font-medium text-base">Trang khách hàng </span>
        <span className="text-xs">
          <Link href="#" className="inline-flex items-center">
            Home <IoIosArrowForward />
          </Link>
        </span>
        <span className="text-xs">
          <Link href="#" className="inline-flex items-center">
            Trang tổng quan <IoIosArrowForward />
          </Link>
        </span>
        <span className="text-xs">
          <Link href="#">Phân tích</Link>
        </span>
      </div>
      <div className="flex flex-row gap-2 items-center w-full bg-white p-4 rounded-lg overflow-hidden">
        <motion.span
          className="whitespace-nowrap"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          }}
        >
          [DUCVPS.SHOP] Chào mừng bạn đến với DUCVPS.SHOP. Muốn nhận thêm
          voucher giảm giá vui lòng tham gia nhóm Hỗ Trợ Zalo !!!
        </motion.span>
      </div>
      {isVisible && (
        <div className="flex flex-row gap-2 items-center w-full bg-yellow-200 p-3 rounded-lg justify-between">
          <span>
            {' '}
            Thông Báo : Tham Gia Nhóm Hỗ Trợ Kĩ Thuật - Giao Lưu{' '}
            <a href="#" className="text-blue-600 underline">
              Tại đây
            </a>
          </span>
          <button onClick={handleClose}>x</button>
        </div>
      )}
      <div className="w-full flex flex-row gap-8">
        {data.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            count={item.count}
            description={item.description}
            Icon={item.Icon}
          />
        ))}
      </div>
      <div className="w-auto flex flex-row gap-4">
        <RightContent {...infoData} />
        <LeftContent />
      </div>
    </main>
  )
}
