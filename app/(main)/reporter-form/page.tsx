import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
    return (
        <div className='flex flex-col gap-2 sm:gap-3 min-w-0'>
            <h1 className='text-xl sm:text-2xl font-bold'>Reporter Details</h1>
            <h4 className='text-sm sm:text-base text-[#666666] font-medium'>We're here to help you with any problems you may be having with our product.</h4>
            <div className='bg-white rounded-[8px] border border-[#19191926] p-3 sm:p-5'>
                <form className='flex flex-col gap-1'>
                    <div className='flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 min-w-0 gap-4 mb-4'>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>Full Name</h1>
                            <input
                                type="text"
                                placeholder="Darshan italiya"
                                className="w-full bg-white rounded-[12px] border border-[#19191926] p-3 sm:p-4 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>Phone Number</h1>
                            <input
                                type="tel"
                                placeholder="1234567890"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-3 sm:p-4 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 min-w-0 gap-4 mb-4'>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>Email</h1>
                            <input
                                type="email"
                                placeholder="demo****@gmail.com"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-3 sm:p-4 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>Address 1</h1>
                            <input
                                type="text"
                                placeholder="Enter Address Line 1"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-3 sm:p-4 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 min-w-0 gap-4 mb-4'>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>Address 2</h1>
                            <input
                                type="text"
                                placeholder="Enter Address Line 1"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>City</h1>
                            <input
                                type="text"
                                placeholder="Enter City"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 min-w-0 gap-4 mb-4'>
                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>State</h1>
                            <input
                                type="text"
                                placeholder="Enter State"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>

                        <div className='flex flex-col gap-1 flex-1'>
                            <h1 className='text-lg font-medium'>Country</h1>
                            <input
                                type="text"
                                placeholder="Enter Country"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <h1 className='text-lg font-medium'>Pincode</h1>
                        <input
                            type="text"
                            placeholder="Enter Pincode"
                            className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                        />
                    </div>

                    <div className='flex flex-col gap-2 my-8'>
                        <h3 className='text-2xl font-medium'>Address Proof</h3>
                        <p className='text-lg text-[#666666] font-regular'>Upload Driving Licence / Voter ID / any government‑issued ID</p>
                        <div className="border-dashed border-2 border-[#19191926] rounded-[8px] px-3 sm:px-5 py-6 sm:py-10">
                            <div className='flex flex-col gap-2 items-center justify-center'>
                                <Image src="/icons/upload.svg" alt="upload" width={24} height={24} />
                                <h1 className='text-base font-medium'>Drag and Drop image here</h1>
                                <p className='text-lg text-[#666666] font-regular'> pdf, jpeg up to 5mb</p>
                                <button
                                    type="button"
                                    style={{
                                        background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                                    }}
                                    className="rounded-[8px] border border-[#19191926] px-3 py-2 text-base font-semibold text-white transition-colors hover:bg-gray-50"
                                >
                                    Choose File
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 my-8'>
                        <h3 className='text-2xl font-medium'>Bank details for payments</h3>
                        <div className='flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 min-w-0 gap-4 mb-4'>
                            <div className='flex flex-col gap-1 flex-1'>
                                <h1 className='text-lg font-medium'>Bank Name</h1>
                                <input
                                    type="text"
                                    placeholder="Enter Bank Name"
                                    className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                                />
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <h1 className='text-lg font-medium'>Branch Name</h1>
                                <input
                                    type="text"
                                    placeholder="Enter Branch Name"
                                    className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 min-w-0 gap-4 mb-4'>
                            <div className='flex flex-col gap-1 flex-1'>
                                <h1 className='text-lg font-medium'>Account Number</h1>
                                <input
                                    type="text"
                                    placeholder="Enter Account Number"
                                    className="w-full bg-white rounded-[12px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                                />
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <h1 className='text-lg font-medium'>IFSC Code</h1>
                                <input
                                    type="text"
                                    placeholder="Enter IFSC Code"
                                    className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 my-8'>
                        <h3 className='text-base sm:text-lg font-medium'>Upload image of cancelled cheque </h3>
                        <div className="border-dashed border-2 border-[#19191926] rounded-[8px] px-3 sm:px-5 py-6 sm:py-10">
                            <div className='flex flex-col gap-2 items-center justify-center'>
                                <Image src="/icons/upload.svg" alt="upload" width={24} height={24} />
                                <h1 className='text-base font-medium'>Drag and Drop image here</h1>
                                <p className='text-lg text-[#666666] font-regular'> pdf, jpeg up to 5mb</p>
                                <button
                                    type="button"
                                    style={{
                                        background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                                    }}
                                    className="rounded-[8px] border border-[#19191926] px-3 py-2 text-base font-semibold text-white transition-colors hover:bg-gray-50"
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 min-w-0 items-stretch md:items-center justify-between">
                        <div className="flex flex-row items-start md:items-center gap-2 min-w-0 flex-1">
                            <input
                                type="checkbox"
                                className="w-4 h-4 mt-0.5 md:mt-0 rounded border border-[#19191926] shrink-0"
                            />
                            <span className="text-sm sm:text-base md:text-lg font-medium min-w-0">
                                I have read the <Link href="/terms-conditions"><span className="text-[#DF3234] underline cursor-pointer">Terms & Conditions</span></Link> and promise to abide by them
                            </span>
                        </div>
                        <button
                            type="button"
                            style={{
                                background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                            }}
                            className="rounded-[8px] border border-[#19191926] px-4 py-3 md:px-6 text-base md:text-lg font-semibold text-white transition-colors hover:bg-gray-50 w-full md:w-auto shrink-0"
                        >
                            Send for review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page