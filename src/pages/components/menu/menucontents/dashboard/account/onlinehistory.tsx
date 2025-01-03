export default function Onlinehistory() {
  return (
    <div className="w-full flex flex-col border rounded-lg p-6 overflow-hidden">
      <span className="text-xl font-medium">Hồ sơ của bạn</span>
      <div className="border w-full my-6"></div>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <tr className="border">
            <th className="border-r p-3">STT</th>
            <th className="border-r p-3">HOẠT ĐỘNG</th>
            <th className="border-r p-3">IP</th>
            <th className="border-r p-3">THIẾT BỊ</th>
            <th className="border-r p-3">THỜI GIAN</th>
          </tr>
          {/* <tr className="border whitespace-nowrap">
            <td className="border-r p-3">1</td>
            <td className="border-r p-3">Đăng nhập vào hệ thống</td>
            <td className="border-r p-3">
              2001:ee1:fa03:4e00:e914:d7f4:ebd4:5474
            </td>
            <td className="border-r p-3">
              Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
              Gecko) Chrome/130.0.0.0 Safari/537.36
            </td>
            <td className="border-r p-3">2024/12/24 12:24:42</td>
          </tr> */}
        </table>
      </div>
    </div>
  )
}
