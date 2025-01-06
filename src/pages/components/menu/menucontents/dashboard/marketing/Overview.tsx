import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { IoEyeSharp } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'
import TextField from '@/components/ui/TextField'

type InfoCardProps = {
  title: string
  count: number
  description: string
  // eslint-disable-next-line no-undef
  Icon: React.ElementType
  color: string
}
const OverviewCard = ({
  title,
  count,
  description,
  Icon,
  color,
}: InfoCardProps) => {
  return (
    <div
      className={`w-full md:w-full rounded-lg bg-white h-full p-4 inline-flex justify-between items-center font-medium ${color}`}
    >
      <div className="flex flex-col gap-3">
        <span>{title}</span>
        <span>{count}</span>
        <span>{description}</span>
      </div>
      <span className="p-3 bg-blue-200 rounded-full">
        <Icon className="text-blue-500 size-16" />
      </span>
    </div>
  )
}
export default function Overview() {
  const Overviewcard = [
    {
      title: 'Tổng số truy cập',
      count: 0,
      description: 'Lượt xem',
      Icon: IoEyeSharp,
      color: 'bg-violet-900',
    },
    {
      title: 'Đăng ký mới',
      count: 0,
      description: 'Thành viên',
      Icon: RxAvatar,
      color: 'bg-blue-500',
    },
    {
      title: 'Số hoa hồng',
      count: 0,
      description: 'Đã nhận',
      Icon: RiMoneyDollarCircleLine,
      color: 'bg-red-400',
    },
  ]
  const detail = [
    {
      email: 'manh1603@gmail.com',
      commission: '5%',
      balance: 0,
    },
  ]
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-row w-full gap-6">
        {Overviewcard.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            count={item.count}
            description={item.description}
            Icon={item.Icon}
            color={item.color}
          />
        ))}
      </div>
      <div className="flex flex-row w-full gap-6">
        <div className="w-7/12 flex flex-col gap-6">
          <div className="flex flex-col bg-white w-full rounded-lg p-4">
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
          <div className="flex flex-col bg-white w-full rounded-lg p-4">
            <span className="text-lg font-medium">Link Giới Thiệu Của Bạn</span>
            <div className="w-full border my-4"></div>
            <div className="flex flex-col w-full gap-4">
              <TextField.Root>
                <TextField.Input
                  type="text"
                  readOnly
                  className="w-11/12 p-4 border rounded-md text-gray-500"
                  value="manhzuytdepzai.vpsshop"
                />
              </TextField.Root>
              <span className="italic">
                Sao chép địa chỉ này và chia sẻ đến bạn bè của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-5/12 rounded-lg p-4 h-fit">
          <span className="text-lg font-medium">Lưu Ý</span>
          <div className="w-full border my-4"></div>
          <div className="flex flex-col w-full gap-4">
            <span className="underline italic font-medium text-md">
              KIẾM TIỀN QUA TIẾP THỊ LIÊN KẾT
            </span>
            <span className="text-sm">
              Chỉ cần bạn sao chép Link giới thiệu của mình và chia sẻ cho bạn
              bè hoặc bất kỳ ai, khi người nhận nhấp vào và đăng ký tài khoản
              qua Link giới thiệu của bạn, bạn sẽ được hưởng 5% giá trị đơn hàng
              mỗi khi tài khoản đó nạp tiền và mua hàng. <br />
              <br /> Số tiền hoa hồng có thể được rút trực tiếp về ngân hàng,
              với số lượng tối thiểu là 50.000đ.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
