import Link from 'next/link'
import Image from 'next/image'
import { LockKeyhole, UserRound } from 'lucide-react'
const page = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
            <Image
                src="/images/logo.svg"
                alt="logo"
                width={620}
                height={1000}
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 object-cover opacity-30"
            />
            <div
                className="flex flex-col items-center justify-center z-10 max-w-[530px] w-full h-auto bg-white px-[26px] py-[24px] rounded-2xl gap-6 backdrop-blur-[4px] shadow-[0px_0px_114px_0px_#0000003D]"
            >
                <div className='flex flex-row items-center justify-center gap-6'>
                    <Image src="/images/logo.svg" alt="logo" width={60} height={100} className='object-cover' />
                    <h1 className='text-5xl font-bold text-center text-black'>Login</h1>
                </div>

                <form className="flex flex-col items-center justify-center gap-6 w-full max-w-sm">
                    {/* Email */}
                    <div className='relative w-full'>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-md text-[#191919] transition-colors"
                        />
                        <UserRound className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4' />
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
                    
                    {/* Forgot password */}
                    <Link href="/forget-password" className='text-[#666666] font-semibold text-lg text-right w-full'>Forgot password?</Link>

                    {/* Login button */}
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
                            Login
                        </button>
                    </div>
                </form>
                
                <div className='flex flex-row text-[#191919] items-center justify-center gap-2'>Continue With</div>
                <span className='flex flex-row text-[#191919] items-center justify-center gap-1'>
                    <span>Don't have an account?</span>
                    <Link className='text-[#DF3234] font-medium text-lg' href="/register">Create Account</Link>
                </span>
            </div>
        </div>
    )
}

export default page
