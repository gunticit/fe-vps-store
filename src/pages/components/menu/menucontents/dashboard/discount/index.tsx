import { Navigate } from '../../../TopUpMenu'

const BankDeposit = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <Navigate title="Mã giảm giá" lastnavigate="Chi tiết Voucher" />
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
