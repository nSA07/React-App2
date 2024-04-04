import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/Header/Header'
import { Sidebar } from '@/components/SideBar/Sidebar'

export const Layout: FC = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='flex min-h-screen'>
        <Sidebar />
        <Outlet />
      </div>
      <Toaster />
    </div>
  )
}
