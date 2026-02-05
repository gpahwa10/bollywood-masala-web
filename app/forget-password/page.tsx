'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowLeft, UserRound } from 'lucide-react'

const page = () => {
    const router = useRouter()

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        console.log('Send OTP to', email);
        router.push(`/forget-password/otp?email=${encodeURIComponent(email ?? '')}`);
    }

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
                <div className='flex flex-col items-center justify-center gap-6'>
                    <Image src="/images/logo.svg" alt="logo" width={60} height={100} className='object-cover' />
                    <h1 className='text-5xl font-bold text-center text-black'>Forgot Password?</h1>
                    <p className='text-center text-[#666666] text-base font-medium'>Enter your registered email address we’ll send you an OTP to reset password</p>
                </div>

                <form
                    className="flex flex-col items-center justify-center gap-6 w-full max-w-sm"
                    onSubmit={submitForm}
                >
                    {/* Email */}
                    <div className='relative w-full'>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            required
                            className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-md text-[#191919] transition-colors"
                        />
                        <UserRound className='absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4' />
                    </div>
                
                    {/* Send OTP button */}
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
                            Send OTP
                        </button>
                    </div>
                </form>
                
                <Link href="/login" className='text-[#DF3234] font-medium text-lg'><span className='flex flex-row items-center justify-center gap-2'><ArrowLeft className='w-4 h-4 text-black'/> Back to Login</span></Link>
                <span className='flex flex-row text-[#191919] items-center justify-center gap-1'>
                    <span>Need help?</span>
                    <Link className='text-[#DF3234] font-medium text-lg' href="/contact-support">Contact Support</Link>
                </span>
            </div>
        </div>
    )
}

export default page