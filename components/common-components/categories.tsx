"use client";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/categories"

const Categories = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-3 sm:gap-4 mb-4 min-w-0 overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-bold">Categories</h1>
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {
                    categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col gap-2 bg-white rounded-md p-2 cursor-pointer min-w-0"
                            onClick={() => router.push(`/category/${category.id}`)}
                        >
                            <div className="relative w-full aspect-[260/83] min-h-0 overflow-hidden rounded-md">
                                <Image src={category.image} alt={category.title} width={260} height={83} className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-[#F5F5F5] px-3 py-2 sm:px-4 rounded-md text-center min-w-0 max-h-[64px] my-auto">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold line-clamp-2">{category.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories