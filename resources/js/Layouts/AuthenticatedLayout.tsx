import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './Partials/AppSidebar'

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1">
        <header className="sticky top-0 z-40 w-full border-b bg-background py-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="p-4">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
