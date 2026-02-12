"use client"
import UploadedVideos from '@/components/common-components/uploaded-videos'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4 sm:gap-5 min-w-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0 flex-1">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Uploaded Videos</h1>
                    <p className="text-base sm:text-lg text-[#666666] font-medium min-w-0">
                        Uploaded videos will be reviewed before going live on Bollywoodmasala.
                    </p>
                </div>
                <div className="flex justify-end sm:justify-end shrink-0">
                    <button
                        type="button"
                        style={{
                            background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                        }}
                        onClick={() => router.push('/upload-video')}
                        className="rounded-[8px] h-11 sm:h-12 border border-[#19191926] px-5 py-2.5 sm:px-7 text-sm sm:text-base leading-tight font-semibold text-white transition-colors hover:bg-gray-50 w-full sm:w-auto"
                    >
                        <span className="flex flex-row items-center justify-center gap-2"><PlusIcon className="w-4 h-4 shrink-0" /> Upload new video</span>
                    </button>
                </div>
            </div>
            <UploadedVideos />
        </div>
    )
}

export default page