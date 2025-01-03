export default function BalanceHistory() {
  return (
    <div className="w-full flex flex-col border rounded-lg p-6">
      <span className="text-xl font-medium">Hồ sơ của bạn</span>
      <div className="border w-full my-6"></div>
      <table>
        <tr className="border">
          <th className="border-r p-3">STT</th>
          <th className="border-r p-3">SỐ TIỀN TRƯỚC</th>
          <th className="border-r p-3">SỐ TIỀN THAY ĐỔI</th>
          <th className="border-r p-3">SỐ TIỀN HIỆN TẠI</th>
          <th className="border-r p-3">NỘI DUNG</th>
          <th className="border-r p-3">THỜI GIAN</th>
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
  )
}
