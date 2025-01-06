export default function Member() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col bg-white w-full rounded-lg p-4">
        <span className="text-md font-medium">
          DANH SÁCH BẠN BÈ ĐƯỢC BẠN GIỚI THIỆU
        </span>
        <div className="w-full border my-4"></div>
        <table>
          <tr className="border text-sm">
            <th className="border-r p-3">#</th>
            <th className="border-r p-3">TÊN ĐĂNG NHẬP</th>
            <th className="border-r p-3">THỜI GIAN THAM GIA</th>
            <th className="border-r p-3">HOA HỒNG NHẬN ĐƯỢC</th>
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
