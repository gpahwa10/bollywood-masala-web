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
                <h1 className='text-3xl font-bold'>Choose the plan that's right for you</h1>
                <p className='text-lg text-[#666666] font-medium'>Join Bollywoodmasala and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col items-start bg-white rounded-lg p-4 w-full mx-auto border border-1 gap-6'>
                    <Image src='/icons/crown-dark.svg' alt='Basic' width={24} height={24} className='object-contain' />
                    <h1 className='text-xl font-bold'>6 Months Plan</h1>
                    <p className='text-lg text-[#666666] font-medium'>Get 6‑month access to a vast selection of movies and shows, including all new releases and Offline Viewing.</p>
                    <h3 className='text-3xl font-bold text-[#DF3234]'>₹100</h3>
                    <div className='flex flex-row w-full gap-2'>
                        <button className='text-black px-4 py-2 rounded-lg h-10 border border-1 border-[#DF3234] w-full'>Start Free Trial</button>
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
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start bg-white rounded-lg p-4 w-full mx-auto border border-1 gap-6'>
                    <Image src='/icons/crown-dark.svg' alt='Basic' width={24} height={24} className='object-contain' />
                    <h1 className='text-xl font-bold'>Annual Plan</h1>
                    <p className='text-lg text-[#666666] font-medium'>Get 12‑month access to a vast selection of movies and shows, including all new releases and Offline Viewing.</p>
                    <h3 className='text-3xl font-bold text-[#DF3234]'>₹150</h3>
                    <div className='flex flex-row w-full gap-2'>
                        <button className='text-black px-4 py-2 rounded-lg h-10 border border-1 border-[#DF3234] w-full'>Start Free Trial</button>
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
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Compare our plans and find the right one for you</h1>
                <p className='text-lg text-[#666666] font-medium'>Bollywoodmasala offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
            </div>
            <Table className="w-full rounded-[10px] border border-[#262626] overflow-hidden mt-8 mb-4">
                <TableHeader className="bg-black text-white">
                    <TableRow>
                        <TableHead className="w-[100px] text-white p-6">Features</TableHead>
                        <TableHead className="text-white p-6">Free Plan</TableHead>
                        <TableHead className="text-white p-6">Subscription Plan <span className='bg-[#FFCC80] rounded-xs px-2 py-1 text-black text-sm font-medium'>Best Value</span></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className="bg-white text-md text-[#666666] font-medium">
                    {featureTable.map((feature) => (
                        <TableRow key={feature.feature}>
                            <TableCell className="font-medium p-6">{feature.feature}</TableCell>
                            <TableCell className="p-6">{feature.freePlan}</TableCell>
                            <TableCell className="p-6">{feature.subscriptionPlan}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


        </div>
    )
}

export default page
