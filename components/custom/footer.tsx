import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full bg-white rounded-lg">
            <div className="flex max-w-7xl flex-row flex-wrap items-start justify-between gap-8 px-10 py-12">
                <div className="flex flex-col gap-10">
                    <Image src="/images/logo.svg" alt="Bollywood Masala logo" width={100} height={100} className="object-contain" />
                    <div>
                        <p className="text-lg font-bold text-black">Follow us</p>
                    <div className="flex flex-row gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                            <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="object-contain" />
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="object-contain" />
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                            <Image src="/icons/x.svg" alt="X" width={20} height={20} className="object-contain" />
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EFEFEF]">
                            <Image src="/icons/youtube.svg" alt="YouTube" width={20} height={20} className="object-contain" />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="w-px self-stretch border-l border-[#EFEFEF]" aria-hidden />

                <div className="flex flex-col gap-4">
                    <p className="text-xl font-bold text-black">Quick Links</p>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">Terms of use</Link>
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">Privacy policy</Link>
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">FAQ</Link>
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">Contact Us</Link>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <p className="text-xl font-bold text-black">Useful Links</p>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">Settings</Link>
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">Cookie Policy</Link>
                        <Link href="/" className="text-md font-medium text-gray-600 hover:text-black">About</Link>
                    </div>
                </div>
            </div>

            <div className="border-t h-px border-gray-200" />

            <div className="mx-auto flex max-w-4xl items-center justify-center px-6 py-6 text-center text-sm text-gray-600">
                © 2026 Bollywood Masala. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
