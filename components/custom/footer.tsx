import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full bg-white rounded-lg overflow-hidden">
            <div className="flex max-w-7xl flex-col sm:flex-row flex-wrap items-start justify-between gap-6 sm:gap-8 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
                <div className="flex flex-col gap-6 sm:gap-10 w-full sm:w-auto">
                    <Image src="/images/logo.svg" alt="Bollywood Masala logo" width={80} height={80} className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px]" />
                    <div>
                        <p className="text-base sm:text-lg font-bold text-black">Follow us</p>
                        <div className="flex flex-row gap-2 mt-2">
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                                <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} className="object-contain sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                                <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} className="object-contain sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                                <Image src="/icons/x.svg" alt="X" width={18} height={18} className="object-contain sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                                <Image src="/icons/youtube.svg" alt="YouTube" width={18} height={18} className="object-contain sm:w-5 sm:h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block w-px self-stretch border-l border-[#EFEFEF] min-h-[1px]" aria-hidden />

                <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
                    <p className="text-lg sm:text-xl font-bold text-black">Quick Links</p>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">Terms of use</Link>
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">Privacy policy</Link>
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">FAQ</Link>
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">Contact Us</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
                    <p className="text-lg sm:text-xl font-bold text-black">Useful Links</p>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">Settings</Link>
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">Cookie Policy</Link>
                        <Link href="/" className="text-sm sm:text-base font-medium text-gray-600 hover:text-black">About</Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="mx-auto flex max-w-4xl items-center justify-center px-4 sm:px-6 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-600">
                © 2026 Bollywood Masala. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
