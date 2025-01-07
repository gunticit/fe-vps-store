import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { PiWarningCircleBold } from 'react-icons/pi'
interface hostingProps {
  price: number
  time: number
  capacity?: number
  bandwidth?: string
  cpu?: number
  ram?: number
  disk?: number
  controlpanel?: string
  firewall?: string
  ssl?: string
  otherdomains: string
  domainaliases: string
  otherparameters?: string
  backup: string
  domain: string
}
export default function Hosting({
  price,
  time,
  capacity,
  bandwidth,
  cpu,
  ram,
  disk,
  controlpanel,
  firewall,
  ssl,
  otherdomains,
  domainaliases,
  backup,
  domain,
  otherparameters,
}: hostingProps) {
  const [isVisible, setIsVisible] = useState(true)
  const handleClose = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="w-full h-full">
      {isVisible && (
        <div className="w-full h-full flex flex-col gap-4 rounded-md bg-gradient-to-r from-[#ffe083] to-[#ffecb5] p-4">
          <div className="inline-flex justify-between">
            <div className="inline-flex items-center gap-1 text-lg">
              <PiWarningCircleBold /> Thông báo
            </div>
            <button onClick={handleClose}>
              <IoCloseSharp className="size-8" />
            </button>
          </div>
          <div className="bg-[#d1b7fb] rounded-xl flex flex-col gap-4 text-md font-medium p-4 w-[97%]">
            <img src="/ads-bear.gif" alt="ads" className="ml-10 h-32 w-32" />
            <span>
              Giá: {price}đ / {time} tháng
            </span>
            {capacity && <span>Dung lượng: {capacity} MB</span>}
            {bandwidth && <span>Băng thông: {bandwidth}</span>}
            {(cpu || ram || disk || controlpanel) && (
              <div className="ml-2 flex flex-col gap-4">
                {cpu && <span>CPU: {cpu} Core</span>}
                {ram && <span>RAM: {ram} GB</span>}
                {disk && <span>Disk: {disk} GB NVMe</span>}
                {controlpanel && <span>Control Panel: {controlpanel}</span>}
              </div>
            )}
            {firewall && <span>{firewall}</span>}
            {ssl && <span>{ssl}</span>}
            <span>Miền khác: {otherdomains}</span>
            <span>Miền bí danh: {domainaliases}</span>
            {otherparameters && <span>Chức năng khác: {otherparameters}</span>}
            <span>Backup: {backup}</span>
            <span>
              Máy chủ: <br />{' '}
              <img src={domain} alt="flag" className="w-22 h-16" />
            </span>
            <button className="w-32 p-2 border text-blue-500 italic">
              ĐẶT MUA
            </button>
            <span>Hân hạnh phục vụ QUÝ KHÁCH !</span>
          </div>
        </div>
      )}
    </div>
  )
}
