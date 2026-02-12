"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const AppSidebar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const { toggleSidebar, state, isMobile, setOpenMobile } = useSidebar()

    const closeMobileSidebar = () => {
        if (isMobile) setOpenMobile(false)
    }

    const menuButtonClass = "h-auto flex items-center gap-2 overflow-visible text-left text-sm sm:text-base md:text-lg font-medium text-[#666666] py-2 sm:py-2.5 [&>span:last-child]:whitespace-normal [&>*:last-child]:whitespace-normal [&>*:last-child]:overflow-visible group-data-[collapsible=icon]:[&>span]:hidden data-[active=true]:bg-transparent data-[active=true]:text-[#DF3234] data-[active=true]:[&_img]:[filter:invert(30%)_sepia(90%)_saturate(7500%)_hue-rotate(347deg)_brightness(96%)_contrast(110%)]"

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname === href || pathname.startsWith(`${href}/`)
    }

    return (
        <Sidebar
            collapsible="icon"
            className="relative flex flex-col items-center [&_[data-sidebar=sidebar]]:!bg-white [&_[data-sidebar=sidebar]]:relative max-h-[100dvh] md:max-h-[1220px] border border-solid"
            style={{
                borderImage: "linear-gradient(180.66deg, rgba(0, 0, 0, 0) -3.55%, #FFFFFF 13.91%, #AEAEAE 26.74%, rgba(0, 0, 0, 0) 145.4%) 1",
            }}
        >
            {/* Collapsible Toggle Button - desktop only; on mobile sidebar opens via header trigger */}
            <Button
                onClick={toggleSidebar}
                className="absolute -right-3 top-20 z-50 h-8 w-8 rounded-full border-2 border-gray-200 bg-white p-0 shadow-md hover:bg-gray-50 transition-all duration-200 hidden md:flex"
                variant="ghost"
            >
                {state === "expanded" ? (
                    <ChevronLeft className="h-4 w-4 text-gray-600" />
                ) : (
                    <ChevronRight className="h-4 w-4 text-gray-600" />
                )}
            </Button>

            <SidebarHeader className="items-center group-data-[collapsible=icon]:hidden">
                <div className="flex items-center justify-center gap-2 py-3 sm:py-4">
                    <Image
                        src="/images/logo.svg"
                        alt="Bollywood Masala logo"
                        width={100}
                        height={100}
                        className="h-14 w-14 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px] object-contain"
                    />
                </div>
            </SidebarHeader>
            
            <SidebarContent className="flex flex-col items-center w-full px-2 sm:px-3">
                <p className="mt-3 sm:mt-5 w-full text-start px-3 sm:px-4 text-xs sm:text-sm font-regular text-[#666666] group-data-[collapsible=icon]:hidden">Menu</p>
                <SidebarMenu className="mx-auto w-full max-w-[220px] gap-1.5 sm:gap-2">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/")}
                            className={menuButtonClass}
                        >
                            <Link href="/" onClick={closeMobileSidebar}>
                                <Image src="/icons/discover.svg" alt="Home" width={20} height={20} className="shrink-0 size-5" />
                                <span>Home</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/live-tv")}
                            className={menuButtonClass}
                        >
                            <Link href="/live-tv" onClick={closeMobileSidebar}>
                                <Image src="/icons/tv.svg" alt="Live" width={20} height={20} className="shrink-0 size-5" />
                                <span>BollywoodMasala<br />Live Channel!!</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/categories")}
                            className={menuButtonClass}
                        >
                            <Link href="/categories" onClick={closeMobileSidebar}>
                                <Image src="/icons/category.svg" alt="Category" width={20} height={20} className="shrink-0 size-5" />
                                <span>Category</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/reporter-form")}
                            className={menuButtonClass}
                        >
                            <Link href="/reporter-form" onClick={closeMobileSidebar}>
                                <Image src="/icons/mic.svg" alt="Reporter" width={20} height={20} className="shrink-0 data-[active=true]:text-[#DF3234] size-5" />
                                <span>Become a <br />Bollywood Reporter</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/manage-videos")}
                            className={menuButtonClass}
                        >
                            <Link href="/manage-videos" onClick={closeMobileSidebar}>
                                <Image src="/icons/mic.svg" alt="Reporter" width={20} height={20} className="shrink-0 size-5" />
                                <span>Manage Videos</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/settings")}
                            className={menuButtonClass}
                        >
                            <Link href="/settings" onClick={closeMobileSidebar}>
                                <Image src="/icons/settings.svg" alt="Settings" width={20} height={20} className="shrink-0 size-5" />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <div
                        className="w-full max-w-[194px] rounded-xl p-[1px] group-data-[collapsible=icon]:hidden"
                        style={{
                            background: 'linear-gradient(180deg, #4C4C4C -25.71%, rgba(178, 178, 178, 0.02) 100%)',
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-[12px] sm:rounded-[16px] bg-white py-3 px-4 sm:py-4 sm:px-8 text-center">
                            <span className="text-[10px] sm:text-xs font-medium text-[#666666]">Click the button below to see the plans</span>
                            <button
                                onClick={() => {
                                    router.push("/subscription")
                                    closeMobileSidebar()
                                }}
                                className="flex flex-row items-center justify-center gap-2 w-auto min-h-9 sm:h-10 px-4 sm:p-6 rounded-[5px] text-white font-semibold text-sm sm:text-md"
                                style={{
                                    background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                                }}
                            >
                                <Image src='/icons/crown.svg' alt="Info" width={20} height={20} className="size-4 sm:size-5"/>
                                Subscription
                            </button>
                        </div>
                    </div>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar