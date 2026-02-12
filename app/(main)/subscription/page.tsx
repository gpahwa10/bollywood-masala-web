import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const featureTable = [
    {
        feature: "Price",
        freePlan: "Free",
        subscriptionPlan: "₹100 / 6 month     ₹150 /Annual",
    },
    {
        feature: "Content",
        freePlan: "Access to a wide selection of gossip and shows with Ads",
        subscriptionPlan: "Access to a wider selection of gossip , shows and exclusive videos and new releases without ads",
    },
    {
        feature: "Devices",
        freePlan: "Watch on one device simultaneously",
        subscriptionPlan: "4 devices",
    },
    {
        feature: "Ad-Free",
        freePlan: "No",
        subscriptionPlan: "Yes",
    },
    {
        feature: "Family Sharing",
        freePlan: "No",
        subscriptionPlan: "Yes, up to 4 family members.",
    },
]

const page = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Choose the plan that's right for you</h1>
                <p className='text-sm sm:text-base text-[#666666] font-regular'>Join Bollywoodmasala and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col items-start bg-white rounded-lg p-3 sm:p-4 w-full mx-auto border border-1 gap-4 sm:gap-6'>
                    <Image src='/icons/crown-dark.svg' alt='Basic' width={24} height={24} className='object-contain' />
                    <h1 className='text-lg sm:text-xl font-semibold'>6 Months Plan</h1>
                    <p className='text-base sm:text-lg text-[#666666] font-regular'>Get 6‑month access to a vast selection of movies and shows, including all new releases and Offline Viewing.</p>
                    <h3 className='text-2xl sm:text-3xl font-bold text-[#DF3234]'>₹100</h3>
                    <div className='flex flex-col lg:flex-row w-full gap-2'>
                        <button className='text-black px-4 py-2 → px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg h-10 border border-1 border-[#DF3234] w-full'>Start Free Trial</button>
                        <div
                            className="w-full rounded-md p-[1px]"
                            style={{
                                background: 'linear-gradient(270deg, #BD002A 0%, rgba(255, 255, 255, 0) 50%, #BD002A 100%)',
                            }}
                        >
                            <button
                                type="submit"
                                className="w-full h-10 px-4 py-2 rounded-[5px] text-white font-semibold text-md"
                                style={{
                                    background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                                }}
                            >
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start bg-white rounded-lg p-3 sm:p-4 w-full mx-auto border border-1 gap-4 sm:gap-6'>
                    <Image src='/icons/crown-dark.svg' alt='Basic' width={24} height={24} className='object-contain' />
                    <h1 className='text-lg sm:text-xl font-semibold'>Annual Plan</h1>
                    <p className='text-base sm:text-lg text-[#666666] font-regular'>Get 12‑month access to a vast selection of movies and shows, including all new releases and Offline Viewing.</p>
                    <h3 className='text-2xl sm:text-3xl font-bold text-[#DF3234]'>₹150</h3>
                    <div className='flex flex-col lg:flex-row w-full gap-2'>
                        <button className='text-black px-4 py-2 → px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg h-10 border border-1 border-[#DF3234] w-full'>Start Free Trial</button>
                        <div
                            className="w-full rounded-md p-[1px]"
                            style={{
                                background: 'linear-gradient(270deg, #BD002A 0%, rgba(255, 255, 255, 0) 50%, #BD002A 100%)',
                            }}
                        >
                            <button
                                type="submit"
                                className="w-full h-10 px-4 py-2 rounded-[5px] text-white font-semibold text-md"
                                style={{
                                    background: 'linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)',
                                }}
                            >
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold'>Compare our plans and find the right one for you</h1>
                <p className='text-lg text-[#666666] font-regular'>Bollywoodmasala offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
            </div>
            <div className="w-full overflow-x-auto mt-6 mb-4">
                <div className="rounded-[10px] overflow-hidden border border-[#262626] min-w-[640px]">
                    <Table className="w-full">
                <TableHeader className="bg-black text-white">
                    <TableRow>
                        <TableHead className="w-[100px] text-white p-3 sm:p-4 rounded-tl-[10px]">Features</TableHead>
                        <TableHead className="text-white p-3 sm:p-4">Free Plan</TableHead>
                        <TableHead className="text-white p-3 sm:p-4 rounded-tr-[10px]">Subscription Plan <span className='bg-[#FFCC80] rounded-xs px-2 py-1 text-black text-sm font-medium'>Best Value</span></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className="bg-white text-md text-[#666666] font-regular">
                    {featureTable.map((feature, index) => (
                        <TableRow key={feature.feature}>
                            <TableCell className={`font-medium p-3 sm:p-4 ${index === featureTable.length - 1 ? "rounded-bl-[10px]" : ""}`}>{feature.feature}</TableCell>
                            <TableCell className="p-3 sm:p-4">{feature.freePlan}</TableCell>
                            <TableCell className={`p-3 sm:p-4 ${index === featureTable.length - 1 ? "rounded-br-[10px]" : ""}`}>{feature.subscriptionPlan}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                    </Table>
                </div>
            </div>


        </div>
    )
}

export default page
