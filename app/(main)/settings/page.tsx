import React from 'react'
import Separator from '@/components/common-components/separator'
import Link from 'next/link'
const page = () => {
    return (
        <div>

            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl font-bold'>Darshan italiya</h1>
                <h4 className='text-lg text-[#666666] font-medium'>Signed in as demo****@gmail.com</h4>
            </div>
            <Separator />
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-bold'>Your account</h1>
                <h4 className='text-lg text-[#666666] font-medium'>You sign in to Bollywoodmasala with your Google Account</h4>
            </div>
            <Separator />
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-medium'>Personal Details</h1>
                <div className='flex flex-row gap-4 mb-4'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <h1 className='text-lg font-medium'>Full Name</h1>
                        <input
                            type="text"
                            placeholder="Darshan italiya"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>

                    <div className='flex flex-col gap-1 flex-1'>
                        <h1 className='text-lg font-medium'>Email</h1>
                        <input
                            type="email"
                            placeholder="demo****@gmail.com"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <h1 className='text-lg font-medium'>Phone Number</h1>
                        <input
                            type="tel"
                            placeholder="1234567890"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>

                </div>
            </div>
            <Separator />
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-medium'>Address (Optional)</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-medium'>Address 1</h1>
                        <input
                            type="text"
                            placeholder="Address line 1"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-medium'>Address 2</h1>
                        <input
                            type="text"
                            placeholder="Address line 2"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-medium'>City</h1>
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-medium'>State</h1>
                        <input
                            type="text"
                            placeholder="State"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-medium'>Country</h1>
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-medium'>Pincode</h1>
                        <input
                            type="text"
                            inputMode="numeric"
                            placeholder="Pincode"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button
                        type="button"
                        style={{
                            background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                        }}
                        className="rounded-[8px] border border-[#19191926] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-gray-50"
                    >
                        Save Details
                    </button>
                </div>
            </div>
            <Separator />
            <div className='flex flex-row w-full justify-between'>
                <h2 className='text-lg font-medium'>Memberships</h2>
                <div className='flex flex-col gap-1'>
                    <span className='text-base text-black font-medium'>No Membership | <Link href="/subscription"><span className='text-primary font-medium underline text-base cursor-pointer'>Get BollywoodMasala Premium</span></Link></span>
                    <span className='text-base text-[#666666] font-medium'>Premium offers uninterrupted music, ad-free videos, and more</span>
                </div>
            </div>
            <Separator />
            <div className='flex flex-col gap-2 mb-4'>
                <h2 className='text-2xl font-medium'>About Us</h2>
                <p className='text-base text-[#666666] font-medium'>Bollywoodmasala is your trusted destination for Bollywood news, live channels, exclusive reports, and verified entertainment updates. We connect fans with real‑time stories straight from the industry.</p>
            </div>
            <div className='flex flex-row max-w-4xl w-full justify-between mb-4'>
                <h2 className='text-lg font-medium'>Legal</h2>
                <div className='flex flex-col gap-1'>
                    <Link href="/terms-conditions"><span className='text-primary font-medium underline text-base cursor-pointer'>Terms & Conditions</span>                    </Link>
                    <Link href="/privacy-policy"><span className='text-primary font-medium underline text-base cursor-pointer'>Privacy Policy</span>                    </Link>
                </div>
            </div>
            <div className='flex flex-row max-w-5xl w-full justify-between mb-4'>
                <h2 className='text-lg font-medium'>Contact</h2>
                <div className='flex flex-col gap-1'>
                    <span>
                        <span>Email:</span>
                        <span className='text-[#666666] font-medium text-base cursor-pointer'>support@bollywoodmasala.com</span>
                    </span>
                
                    <span>
                        <span className='text-black font-medium text-base'>Phone:</span>
                        <span className='text-[#666666] font-medium text-base'>+91 980 000 0000</span>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default page