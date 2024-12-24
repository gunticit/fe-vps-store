import ServiceMenu from './ServiceMenu'
import UtilityMenu from './UtilityMenu'
import TopUpMenu from './TopUpMenu'
import DashboardMenu from './DashboardMenu'

export default function Menu() {
  return (
    <aside className="bg-white w-64 h-fit p-4 space-y-4 overflow-y-scroll md:w-64 xl:h-screen pb-28">
      <DashboardMenu />
      <ServiceMenu title="Dịch vụ" />
      <UtilityMenu title="Tiện ích" />
      <TopUpMenu
        title="Nạp tiền tài khoản"
        description="Nạp ngay để bạn mua những thứ mà bạn muốn trong website"
        buttonLabel="Nạp ngay"
        buttonLink="#"
      />
    </aside>
  )
}
