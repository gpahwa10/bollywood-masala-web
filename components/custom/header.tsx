"use client"
import { useState } from "react"
import { Input } from '../ui/input'
import { Filter, Search } from 'lucide-react'
import Image from 'next/image'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { getCategoryById } from '@/lib/categories'

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
        <div className='flex flex-row items-end justify-between my-4'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <div className='flex flex-row items-center gap-4'>
                <div className='flex flex-row items-center gap-2 bg-white rounded-lg p-2'>
                    <Search className='w-4 h-4' />
                    <Input
                        type='text'
                        placeholder='Search the series, movies...'
                        className='w-full border-none outline-none'
                    />
                    <Filter className='w-4 h-4' />
                </div>
                <Image src='/icons/notification.svg' alt='Notification' width={28} height={28} className='object-contain' />
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsUserMenuOpen((prev) => !prev)}
                        className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DF3234]"
                    >
                        <Image
                            src="/images/dummy-user.jpg"
                            alt="User"
                            fill
                            className="object-cover"
                        />
                    </button>
                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-[#19191926] bg-white shadow-md z-20">
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-left text-sm text-[#191919] hover:bg-[#F5F5F5]"
                                onClick={() => {
                                    setIsUserMenuOpen(false);
                                    router.push("/settings");
                                }}
                            >
                                Settings
                            </button>
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-left text-sm text-[#191919] hover:bg-[#F5F5F5]"
                                onClick={() => {
                                    setIsUserMenuOpen(false);
                                    router.push("/manage-videos");
                                }}
                            >
                                Manage Videos
                            </button>
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-left text-sm text-[#DF3234] hover:bg-[#FEEBEC]"
                                onClick={() => {
                                    setIsUserMenuOpen(false);
                                    router.push("/login");
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Header