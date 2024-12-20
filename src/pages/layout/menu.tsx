import Link from 'next/link'
export default function Menu() {
  return (
    <aside className="bg-gray-800 text-white w-60 h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admin" className="hover:bg-gray-700 p-2 block rounded">
              Bảng Điều Khiển
            </Link>
          </li>
          <li>
            <Link
              href="/admin/hosting"
              className="hover:bg-gray-700 p-2 block rounded"
            >
              Mua Hosting
            </Link>
          </li>
          <li>
            <Link
              href="/admin/vps"
              className="hover:bg-gray-700 p-2 block rounded"
            >
              Mua VPS
            </Link>
          </li>
          {/* Add more links as necessary */}
        </ul>
      </nav>
    </aside>
  )
}
