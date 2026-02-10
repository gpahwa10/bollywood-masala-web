'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { KeyRound } from 'lucide-react'
export default function OtpClient() {
    const searchParams = useSearchParams()
    const email = searchParams.get('email') ?? ''

    function submitOtp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const otp = (form.elements.namedItem('otp') as HTMLInputElement)?.value
        console.log('Verify OTP', otp, 'for', email)
        // TODO: call verify OTP API, then redirect to reset-password
        alert('OTP verified successfully')
    }

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
                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                    <Image src="/images/logo.svg" alt="logo" width={60} height={100} className="object-cover" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black">Verify Your Code</h1>
                    <p className="text-center text-[#666666] text-sm sm:text-base font-medium px-2 sm:px-4">
                        Enter your registered email address we'll send you an OTP to reset password
                    </p>
                </div>

                <form
                    className="flex flex-col items-center justify-center gap-5 sm:gap-6 w-full max-w-sm"
                    onSubmit={submitOtp}
                >
                    <div className="relative w-full">
                        <input
                            name="otp"
                            type="text"
                            placeholder="Enter OTP"
                            maxLength={6}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            required
                            className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-primary placeholder:text-[#191919] font-semibold placeholder:text-md text-[#191919] transition-colors"
                        />
                        <KeyRound className="absolute right-0 top-1/2 -translate-y-1/2 text-[#191919] w-4 h-4" />
                    </div>
                    <span className='text-[#666666] text-sm font-medium'>We've sent a 6-digit code. <span className='text-[#DF3234]'>00:30</span></span>

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
                            Verify Code
                        </button>
                    </div>


                </form>
                

                <span className="flex flex-row text-[#191919] items-center justify-center gap-1">
                    <span>Didn&apos;t receive Code?</span>
                    <Link className="text-[#DF3234] font-medium text-lg" href="/forget-password">
                        Resend
                    </Link>
                </span>
            </div>
        </div>
    )
}
