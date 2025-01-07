import Button from '@/components/ui/Button'
import { Navigate } from '../../../TopUpMenu'

const BankDeposit = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Navigate title="Nạp tiền tự động" lastnavigate="Nạp tiền tài khoản" />
      <div className="flex flex-col gap-6 w-full bg-white p-4 rounded-lg">
        <span className="font-bold text-xl text-black">
          Nạp tiền chuyển khoản
        </span>
        <div className="w-full border"></div>
        <span className="bg-yellow-200 p-8 rounded-lg">
          Nhớ Pr thêm Khách Ủng Hộ Admin nhé ^^
        </span>
        <div className="w-1/2 flex flex-col items-center space-y-4 bg-gray-50 rounded-lg p-8">
          <div className="w-1/3 text-center bg-white p-2">
            <img
              src="/vietcombank.png"
              alt="Ảnh ngân hàng"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col text-lg border items-center w-10/12 rounded-lg">
            <span className="p-4 border-b w-full text-center">
              Số tài khoản: 1014645829
            </span>
            <span className="p-4 border-b w-full text-center">
              Chủ tài khoản: Trịnh Văn Mạnh
            </span>
            <span className="p-4 border-b w-full text-center">
              Ngân hàng: Vietcombank
            </span>
            <span className="p-4 border-b w-full text-center">
              Nội dung nạp: naptien2331
            </span>
            <span className="p-4 w-full text-center">
              <Button>Quét mã QR</Button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="flex flex-col gap-6 w-1/2 bg-white p-4 rounded-lg">
          <span className="font-bold text-lg text-black">
            Nạp tiền ngân hàng
          </span>
          <div className="flex flex-row text-md border items-center w-full">
            <span className="p-4 border-r w-full text-center">
              Mã giao dịch
            </span>
            <span className="p-4 border-r w-full text-center">Tiền nạp</span>
            <span className="p-4 border-r w-full text-center">Nội dung</span>
            <span className="p-4 w-full text-center">Thời gian</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-1/2 bg-white p-4 rounded-lg">
          <span className="font-bold text-lg text-black">Nạp tiền Momo</span>
          <div className="flex flex-row text-md border items-center w-full">
            <span className="p-4 border-r w-full text-center">
              Mã giao dịch
            </span>
            <span className="p-4 border-r w-full text-center">Tiền nạp</span>
            <span className="p-4 border-r w-full text-center">Nội dung</span>
            <span className="p-4 w-full text-center">Thời gian</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BankDeposit
