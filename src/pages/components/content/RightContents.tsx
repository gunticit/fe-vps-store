type AccountProp = {
  image: string
  name: string
  date: string
}

export default function RightContent({ image, name, date }: AccountProp) {
  return (
    <div className="w-8/12 flex flex-col gap-4 bg-white p-4 rounded-lg">
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col ">
          <span>
            Chào các bạn, mình là admin nếu bạn nào gặp lỗi khi mua vps liên hệ
            ngay mình nhé, lưu sdt lại không thừa đâu
          </span>
          <span>Hỗ trợ Zalo: 0376263452(SP 7:30 - 22:30)</span>
          <span>
            Hỗ trợ Facebook:{' '}
            <a
              href="https://www.facebook.com/watch/?v=1088895969108917"
              className="text-blue-500 underline"
            >
              Tại đây
            </a>
          </span>
        </div>
      </div>
      <img src="/discount.png" alt="discount" className="rounded-lg" />
    </div>
  )
}
