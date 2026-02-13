import Link from 'next/link'
import Image from 'next/image'
import countries from "country-list-with-dial-code-and-flag";
import { ChevronDown, LockKeyhole, Mail, Phone, UserRound } from 'lucide-react'
const page = () => {
    const countryList = countries.getAll();
    return (

        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 sm:px-6">
            <Image
                src="/images/logo.svg"
                alt="logo"
                width={620}
                height={1000}
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 object-cover opacity-30"
            />
            <div
                className="flex flex-col items-center justify-center z-10 max-w-[530px] w-full h-auto bg-white px-5 sm:px-7 py-6 sm:py-7 rounded-2xl gap-5 sm:gap-6 backdrop-blur-[4px] shadow-[0px_0px_114px_0px_#0000003D]"
            >
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                    <Image src="/images/logo.svg" alt="logo" width={60} height={100} className='object-cover' />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black">Sign-Up</h1>
                </div>

                <form className="flex flex-col items-center justify-center gap-5 sm:gap-6 w-full max-w-sm">

                    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        {/* Full Name */}
                        <div className='relative w-full'>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-base text-[#191919] transition-colors"
                            />
                            <UserRound className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4' />
                        </div>
                        {/* Location */}
                        <div className='relative w-full'>
                            <select
                                className="w-full bg-transparent border-b border-gray-300 py-2 pr-8 outline-none focus:border-primary font-semibold text-base text-[#191919] transition-colors appearance-none cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled className="text-gray-400">Location</option>
                                {countryList.map((country) => (
                                    <option key={country.code} value={country.name}>{country.name}</option>
                                ))}
                            </select>
                            <ChevronDown className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4 pointer-events-none' />
                        </div>
                        
                    </div>

                    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        {/* Full Name */}
                        <div className='relative w-full'>
                            <input
                                type="text"
                                placeholder="Mobile"
                                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-base text-[#191919] transition-colors"
                            />
                            <Phone className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4' />
                        </div>
                        {/* Email */}
                        <div className='relative w-full'>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-base text-[#191919] transition-colors"
                            />
                            <Mail className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4' />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className='relative w-full'>
                        <select
                            className="w-full bg-transparent border-b border-gray-300 py-2 pr-8 outline-none focus:border-primary font-semibold text-base text-[#191919] transition-colors appearance-none cursor-pointer"
                            defaultValue=""
                        >
                            <option value="" disabled className="text-gray-400">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <ChevronDown className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4 pointer-events-none' />
                    </div>

                    {/* Password */}
                    <div className='relative w-full'>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-md text-[#191919] transition-colors"
                        />
                        <LockKeyhole className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4' />
                    </div>

                    {/* Register button */}
                    <div
                        className="w-full rounded-md p-[1px]"
                        style={{
                            background: 'linear-gradient(270deg, #BD002A 0%, rgba(255, 255, 255, 0) 50%, #BD002A 100%)',
                        }}
                    >
                        <button
                            type="submit"
                            className="w-full h-10 p-2 rounded-[5px] text-white font-semibold text-md"
                            style={{
                                background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                            }}
                        >
                            Sign-Up
                        </button>
                    </div>
                </form>

                <span className='flex flex-col text-[#666666] text-sm items-center justify-center gap-1'>
                    <span>By continuing, you agree to our</span>
                    <span className='text-[#DF3234] text-sm font-medium'><Link href={"/terms-conditions"}>Terms of conditions</Link> <span className='text-[#666666]'>and</span> <Link href={"/privacy-policy"} className='text-[#DF3234] text-sm font-medium'>Privacy Policy.</Link></span>
                </span>
                <span className='flex flex-row text-[#191919] items-center justify-center gap-1'>
                    <span>Already have an account?</span>
                    <Link className='text-[#DF3234] font-medium text-lg' href="/login">Sing In!</Link>
                </span>
            </div>
        </div>
    )
}

export default page
