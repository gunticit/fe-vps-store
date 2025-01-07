import Member from './Member'

export default function Withdraw() {
  const detail = [
    {
      email: 'manh1603@gmail.com',
      commission: '5%',
      balance: 0,
    },
  ]
  return (
    <div className="flex flex-col w-full gap-6">
      <Member />
      <div className="w-full flex flex-row gap-6">
        <div className="flex flex-col bg-white w-5/12 rounded-lg p-4">
          <span className="text-lg font-medium">Thông Tin Chi Tiết</span>
          <div className="w-full border my-4"></div>
          <div className="flex flex-col gap-2">
            <select
              id="bank-select"
              name="bank"
              value="Chọn ngân hàng cần rút"
              className="border rounded-lg p-2"
            >
              <option value="" disabled>
                -- Chọn ngân hàng cần rút --
              </option>
              <option value="momo">MOMO</option>
              <option value="mbbank">MBBANK</option>
            </select>
            <input
              type="text"
              placeholder="Nhập số tài khoản cần rút"
              value=""
              className="p-2 rounded-md border"
            />
            <input
              type="text"
              placeholder="Nhập tên chủ tài khoản"
              value=""
              className="p-2 rounded-md border"
            />
            <input
              type="text"
              placeholder="Nhập số dư hoa hồng cần rút"
              value=""
              className="p-2 rounded-md border"
            />
            <button className="p-2 w-24 bg-[#2196f3] rounded-md text-white">
              Rút ngay
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-white w-7/12 rounded-lg p-4 h-fit">
          <span className="text-lg font-medium">Thông Tin Chi Tiết</span>
          <div className="w-full border my-4"></div>
          <div className="flex flex-row">
            <div className="flex flex-col w-5/12">
              <span>Email:</span>
              <span>Mức hoa hồng:</span>
              <span>Số dư hoa hồng khả dụng:</span>
            </div>
            {detail.map((value, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-medium">{value.email}</span>
                <span className="text-red-700 font-medium">
                  {value.commission}
                </span>
                <span className="font-medium text-blue-700">
                  {value.balance}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col bg-white w-full rounded-lg p-4">
          <span className="text-md font-medium">
            DANH SÁCH BẠN BÈ ĐƯỢC BẠN GIỚI THIỆU
          </span>
          <div className="w-full border my-4"></div>
          <table>
            <tr className="border text-sm">
              <th className="border-r p-3">#</th>
              <th className="border-r p-3">SỐ TIỀN RÚT</th>
              <th className="border-r p-3">NGÂN HÀNG</th>
              <th className="border-r p-3">THỜI GIAN</th>
              <th className="border-r p-3">TRẠNG THÁI</th>
              <th className="border-r p-3">LÝ DO</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
