import Image from 'next/image'
const page = () => {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-bold'>Upload Video</h1>
                    <p className='text-lg text-[#666666] font-medium'>Uploade videos will be reviewed before going live on Bollywoodmasala.</p>
                </div>
            </div>
            <div className='bg-white rounded-[8px] border border-[#19191926] p-5 my-4'>
                <form className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-2 flex-1'>
                            <h1 className='text-lg font-medium'>Video Title</h1>
                            <input
                                type="text"
                                placeholder="Enter Video Title"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <h1 className='text-lg font-medium'>Location</h1>
                            <input
                                type="text" 
                                placeholder="Enter Location"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <h1 className='text-lg font-medium'>Description</h1>
                            <textarea
                                placeholder="Write a short description"
                                className="w-full bg-white rounded-[8px] border border-[#19191926] p-5 outline-none focus:border-primary placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:leading-[1.5] placeholder:text-[#666666] text-[#191919] font-semibold transition-colors"
                            />
                        </div>
                        <div className='flex flex-col gap-2 my-8'>
                   <h3 className='text-2xl font-medium'>Upload Video</h3>
                    <div className='border-dashed border-2 border-[#19191926] rounded-[8px] px-5 py-10'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Image src="/icons/upload.svg" alt="upload" width={24} height={24} />
                            <h1 className='text-base font-medium'>Drag & drop your video here or click to upload</h1>
                            <p className='text-lg text-[#666666] font-regular'> MP4, MOV, AVI, MKV, WEBM </p>
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
                        <button
                        type="button"
                        style={{
                            background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                        }}
                        className="rounded-[8px] max-w-[150px] border border-[#19191926] px-6 py-3 text-sm font-regular text-white transition-colors hover:bg-gray-50"
                    >
                        Submit Video
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page