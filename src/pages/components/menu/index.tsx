import ServiceMenu from './ServiceMenu'
import UtilityMenu from './UtilityMenu'
import TopUpMenu from './TopUpMenu'
import DashboardMenu from './DashboardMenu'

export default function Menu() {
  return (
    <aside className="fixed top-0 left-0 bg-white w-2/12 xl:w-4/12 md:w-7/12 h-full px-4 space-y-4 pb-32">
      <img src="/logo.png" alt="Logo" className="h-20 bg-white xl:h-auto" />
      <div
        className="h-full w-full overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <DashboardMenu />
        <ServiceMenu title="Dịch vụ" />
        <UtilityMenu title="Tiện ích" />
        <TopUpMenu
          title="Nạp tiền tài khoản"
          description="Nạp ngay để bạn mua những thứ mà bạn muốn trong website"
          buttonLabel="Nạp ngay"
          buttonLink="#"
        />
      </div>
    </aside>
  )
}
