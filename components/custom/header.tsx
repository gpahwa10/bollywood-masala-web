"use client"
import { useState } from "react"
import { Input } from '../ui/input'
import { Filter, Search } from 'lucide-react'
import Image from 'next/image'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { getCategoryById } from '@/lib/categories'
import { SidebarTrigger } from '@/components/ui/sidebar'

const routeTitleMap: Record<string, string> = {
    "/": "Home",
    "/live-tv": "Live Channel",
    "/categories": "Categories",
    "/reporter-form": "Reporter Form",
    "/settings": "Settings",
    "/subscription": "Subscription",
    "/manage-videos": "Manage Uploads",
    "/upload-video": "Manage Uploads",
}

const Header = () => {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const category = pathname.startsWith("/category/") && params.id ? getCategoryById(params.id) : null;
    const staticTitle = routeTitleMap[pathname];
    const title = category?.title ?? staticTitle ?? "Home";
    return (
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-3 my-4 min-w-0">
  
  {/* LEFT */}
  <div className="flex flex-row items-center gap-2 min-w-0">
    <SidebarTrigger className="lg:hidden shrink-0" />
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
      {title}
    </h1>
  </div>

  {/* RIGHT */}
  <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
    
    {/* SEARCH */}
    <div className="flex flex-row items-center gap-2 bg-white rounded-lg p-2 min-w-0 flex-1 lg:flex-initial lg:min-w-[240px]">
      <Search className="w-4 h-4 shrink-0" />
      <Input
        type="text"
        placeholder="Search the series, movies..."
        className="w-full min-w-0 border-none outline-none text-sm"
      />
      <Filter className="w-4 h-4 shrink-0" />
    </div>

    {/* NOTIFICATION */}
    <Image
      src="/icons/notification.svg"
      alt="Notification"
      width={24}
      height={24}
      className="object-contain shrink-0 w-6 h-6 sm:w-7 sm:h-7"
    />

    {/* AVATAR */}
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsUserMenuOpen((prev) => !prev)}
        className="relative h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 rounded-full overflow-hidden border-2 border-red"
      >
        <Image src="/images/dummy-user.jpg" alt="User" fill className="object-cover" />
      </button>

      {/* DROPDOWN unchanged */}
    </div>

  </div>
</div>

    )
}

export default Header