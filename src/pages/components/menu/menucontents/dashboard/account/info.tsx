import Readonly from './infomodel/inputReadonly'
import { CiLock } from 'react-icons/ci'
export default function Info() {
  return (
    <div className="flex flex-row w-full gap-6">
      <div className=" flex flex-col w-3/12 border h-fit rounded-lg p-4 gap-4 items-center justify-center">
        <span className="text-xl font-medium text-center py-4">
          Ảnh đại diện
        </span>
        <div className="w-fit flex flex-col items-center mb-6">
          <img
            src="/avatar.jpg"
            alt="ảnh đại diện"
            className="w-1/2 h-auto rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-9/12 gap-6">
        <div className="w-full flex flex-col border rounded-lg p-6">
          <span className="text-xl font-medium">Thông tin của bạn</span>
          <div className="border w-full my-6"></div>
          <Readonly label="Họ và tên" value="Manh" />
          <Readonly label="Tài khoản" value="Manhhh" />
          <div className="w-full flex flex-row gap-6">
            <Readonly label="Mã nhận dạng" value="1603" />
            <Readonly label="Cấp bậc" value="vua" />
          </div>
          <div className="w-full flex flex-row gap-6">
            <Readonly label="Số dư" value="0" />
            <Readonly label="Tổng nạp" value="0" />
          </div>
          <div className="w-full flex flex-row gap-6">
            <Readonly
              label="Địa chỉ IP"
              value="2001:ee0:1c55:30c6:cc6e:85dc:c348:6544"
            />
            <Readonly label="Ngày tham gia" value="2024-12-22 19:30:35" />
          </div>
          <div className="w-1/2 pr-3">
            <Readonly label="Chiết khấu giảm" value="0%" />
          </div>
          <Readonly
            label="Thiết bị đăng ký"
            value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
          />
        </div>
        <div className="w-full flex flex-col border rounded-lg p-6">
          <span className="text-xl font-medium">Thay đổi địa chỉ Email</span>
          <div className="border w-full my-6"></div>
          <Readonly label="Token" value="e357e310d4ba07657ee5268bc0822702" />
          <Readonly label="Email của bạn" value="mmmmanh345@gmail.com" />
          <button className="w-3/12 border p-3 mt-4 rounded-lg bg-[#2196f3] inline-flex gap-2 justify-center text-white font-medium">
            <CiLock className="size-6" />
            Thay đổi Email
          </button>
        </div>
      </div>
    </div>
  )
}
