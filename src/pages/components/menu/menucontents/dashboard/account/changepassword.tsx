import Write from './infomodel/inputWrite'

export default function Changepassword() {
  return (
    <div className="w-full flex flex-col border rounded-lg p-6">
      <span className="text-xl font-medium">Hồ sơ của bạn</span>
      <div className="border w-full my-6"></div>
      <Write label="Mật khẩu cũ" value="Mật khẩu cũ" />
      <Write label="Mật khẩu mới" value="Mật khẩu mới" />
      <Write label="Xác nhận mật khẩu" value="Xác nhận mật khẩu" />
      <button className="w-fit border p-2 px-4 mt-4 rounded-lg bg-[#2196f3] justify-center text-white font-medium">
        Xác thực
      </button>
    </div>
  )
}
