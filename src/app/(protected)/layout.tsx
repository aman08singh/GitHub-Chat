import { SidebarProvider } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

type Props = {
  children: React.ReactNode
}

export default function SidebarLayout({children}: Props) {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <main className='w-full m-2'>
        <div className='flex items-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4'>
          {/* <SearchBar /> */}
          <div className="ml-auto"></div>
          <UserButton />
        </div>
      </main>
    </SidebarProvider>
  )
}
