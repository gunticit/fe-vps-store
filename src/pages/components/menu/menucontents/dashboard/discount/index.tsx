import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const BankDeposit = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start w-full bg-white p-4 rounded-lg">
        <span className="font-medium text-base">Mã giảm giá </span>
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
            <Link href="#">Chi tiết Voucher</Link>
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col rounded-lg p-6 bg-white">
        <span className="text-xl font-medium">Danh sách mã giảm giá</span>
        <div className="border w-full my-6"></div>
        <table>
          <tr className="border">
            <th className="border-r p-3">ID</th>
            <th className="border-r p-3">MÃ</th>
            <th className="border-r p-3">MÃ GIẢM</th>
            <th className="border-r p-3">LƯỢT DÙNG</th>
            <th className="border-r p-3">ĐÃ SỬ DỤNG</th>
            <th className="border-r p-3">DỊCH VỤ</th>
          </tr>
          {/* <tr>
            <td>1</td>
            <td>1,000,000</td>
            <td>+100,000</td>
            <td>1,100,000</td>
            <td>Nạp tiền</td>
            <td>2023-04-15</td>
            </tr> */}
        </table>
      </div>
    </div>
  )
}
export default BankDeposit
