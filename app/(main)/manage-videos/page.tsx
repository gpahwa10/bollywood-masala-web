"use client"
import LatestVideos from '@/components/common-components/latest-videos'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-bold'>Uploaded Videos</h1>
                    <p className='text-lg text-[#666666] font-medium'>Uploaded videos will be reviewed before going live on Bollywoodmasala.</p>

                </div>
                <div className='flex justify-end'>
                    <button
                        type="button"
                        style={{
                            background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                        }}
                        onClick={() => router.push('/upload-video')}
                        className="rounded-[8px] max-h-[50px] border border-[#19191926] px-7 py-2 text-base leading-tight font-semibold text-white transition-colors hover:bg-gray-50"
                    >
                        <span className='flex flex-row items-center gap-2'><PlusIcon className='w-4 h-4' /> Upload new video</span>
                    </button>
                </div>
            </div>
            <LatestVideos />
        </div>
    )
}

export default page