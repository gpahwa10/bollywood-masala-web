"use client";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/categories"

const Categories = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-2xl font-bold">Categories</h1>
            <div className="grid w-full grid-cols-4 gap-4">
                {
                    categories.map((category) => (
                        <div className=" flex flex-col gap-2 bg-white rounded-md p-2 cursor-pointer" onClick={() => router.push(`/category/${category.id}`)}>
                            <Image src={category.image} alt={category.title} width={260} height={83} className="w-full h-full object-cover" />
                            <div className="bg-[#F5F5F5] px-4 py-2 rounded-md text-center">
                            <h3 className="text-lg font-bold">{category.title}</h3>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories