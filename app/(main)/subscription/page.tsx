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

const subscriptionPlans = [
    {
        name: "6 Months Plan",
        price: 100,
        description:"Get 6‑month access to a vast selection of movies and shows, including all new releases and Offline Viewing." ,
        isBestValue: false,
    },
    {
        name: "Annual Plan",
        price: 150,
        description: "Get 12‑month access to a vast selection of movies and shows, including all new releases and Offline Viewing.",
        isBestValue: true,
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
                {subscriptionPlans.map((plan) => (
                    <div key={plan.name} className='relative flex flex-col items-start bg-white rounded-xl p-3 sm:p-4 w-full mx-auto border border-1 gap-4 sm:gap-6'>
                    {plan.isBestValue && (
                        <div className='absolute top-0 right-2 w-[54px] h-[54px]'>
                            <Image src='/images/best-value-tag.svg' alt='' width={54} height={54} className='w-full h-full object-contain' />
                            <span className='absolute inset-x-2 top-2 bottom-4 flex items-center justify-center text-black text-xs font-medium'>Best Value</span>
                        </div>
                    )}
                    <Image src='/icons/crown-dark.svg' alt='Basic' width={24} height={24} className='object-contain' />
                    <h1 className='text-lg sm:text-xl font-semibold'>{plan.name}</h1>
                    <p className='text-base sm:text-lg text-[#666666] font-regular'>{plan.description}</p>
                    <h3 className='text-2xl sm:text-3xl font-bold text-[#DF3234]'>₹{plan.price}</h3>
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
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold'>Compare our plans and find the right one for you</h1>
                <p className='text-lg text-[#666666] font-regular'>Bollywoodmasala offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
            </div>
            <div className="w-full overflow-x-auto mt-6 mb-4">
  <div className="rounded-xl overflow-hidden border border-gray-200 min-w-[640px]">
    <Table className="w-full table-fixed">
      
      {/* HEADER */}
      <TableHeader className="bg-black">
        <TableRow className="divide-x divide-gray-800 text-white">
          
          <TableHead className="w-1/3 p-5 font-medium text-white">
            Features
          </TableHead>

          <TableHead className="w-1/3 p-5 font-medium text-white">
            Free Plan
          </TableHead>

          <TableHead className="w-1/3 p-5 font-medium text-white">
            Subscription plan{" "}
            <span className="ml-2 bg-[#FFCC80] text-black text-xs font-semibold px-2 py-1 rounded-md">
              Best Value
            </span>
          </TableHead>

        </TableRow>
      </TableHeader>

      {/* BODY */}
      <TableBody className="text-[15px] text-gray-600">
  {featureTable.map((feature) => (
    <TableRow
      key={feature.feature}
      className="bg-gray-50 border-t border-gray-200 divide-x divide-gray-200"
    >
      <TableCell className="w-1/3 p-6 font-medium text-gray-700">
        <div className="w-full whitespace-normal break-words">
          {feature.feature}
        </div>
      </TableCell>

      <TableCell className="w-1/3 p-6">
        <div className="w-full whitespace-normal break-words">
          {feature.freePlan}
        </div>
      </TableCell>

      <TableCell className="w-1/3 p-6">
        <div className="w-full whitespace-normal break-words">
          {feature.subscriptionPlan}
        </div>
      </TableCell>
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
