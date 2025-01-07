import { useRouter } from 'next/router'
import Hosting from './Hosting'
import { Navigate } from '../../../TopUpMenu'

// Dữ liệu các gói hosting
const hostingDetails = {
  basic: {
    price: 50000,
    time: 6,
    capacity: 100,
    bandwidth: 'không giới hạn',
    ssl: 'Miễn phí chứng chỉ SSL',
    otherdomains: 'không giới hạn',
    domainaliases: 'không giới hạn',
    otherparameters: 'không giới hạn',
    backup: 'Hằng ngày',
    domain: '/flag.webp',
  },
  cheap: {
    price: 25000,
    time: 1,
    cpu: 5,
    ram: 5,
    disk: 5,
    controlpanel: 'cPanel Hosting',
    ssl: 'Miễn phí chứng chỉ SSL',
    otherdomains: 'không giới hạn',
    domainaliases: 'không giới hạn',
    backup: 'Hàng ngày',
    domain: '/flag.webp',
  },
  v3: {
    price: 45000,
    time: 1,
    capacity: 100,
    cpu: 5,
    ram: 5,
    controlpanel: 'cPanel Hosting',
    ssl: 'Miễn phí chứng chỉ SSL',
    otherdomains: 'không giới hạn',
    domainaliases: 'không giới hạn',
    backup: 'Hàng ngày',
    domain: '/flag.webp',
  },
  v4: {
    price: 39000,
    time: 1,
    capacity: 50,
    cpu: 5,
    ram: 5,
    controlpanel: 'cPanel',
    ssl: 'Miễn phí chứng chỉ SSL',
    otherdomains: 'không giới hạn',
    domainaliases: 'không giới hạn',
    backup: 'Hàng ngày',
    domain: '/flag.webp',
  },
  v5: {
    price: 59000,
    time: 1,
    capacity: 50,
    cpu: 5,
    ram: 5,
    controlpanel: 'cPanel Hosting',
    ssl: 'Miễn phí chứng chỉ SSL',
    otherdomains: 'không giới hạn',
    domainaliases: 'không giới hạn',
    backup: 'Hàng ngày',
    domain: '/flag.webp',
  },
}
const navigate = {
  basic: {
    title: 'Hosting Basic',
    lastnavigate: 'Thông Tin Chi Tiết Sản Phẩm',
  },
  cheap: {
    title: 'Hosting Cheap',
    lastnavigate: 'Thông Tin Chi Tiết Sản Phẩm',
  },
  v3: {
    title: 'Hosting V3',
    lastnavigate: 'Thông Tin Chi Tiết Sản Phẩm',
  },
  v4: {
    title: 'Hosting V4',
    lastnavigate: 'Thông Tin Chi Tiết Sản Phẩm',
  },
  v5: {
    title: 'Hosting V5',
    lastnavigate: 'Thông Tin Chi Tiết Sản Phẩm',
  },
}
export default function BuyHosting() {
  const router = useRouter()
  const { type } = router.query

  const hostingData = hostingDetails[type as string]
  const navigation = navigate[type as string]

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Navigate {...navigation} />
      <Hosting {...hostingData} />
    </div>
  )
}
