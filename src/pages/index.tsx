import React from 'react'
import Menu from '../pages/layout/menu'
import Header from '../pages/layout/header'

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1 bg-gray-100">
        <Header />
        <main className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">Gói Hosting</h2>
              <p className="text-gray-500">0 Gói Hosting Đã Mua</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">Gói VPS</h2>
              <p className="text-gray-500">0 Gói VPS Đã Mua</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">Tài Liệu</h2>
              <p className="text-gray-500">0 Tài Liệu Đã Mua</p>
            </div>
            {/* Add more cards dynamically */}
          </div>
        </main>
      </div>
    </div>
  )
}
