import Categories from "@/components/common-components/categories"
import LatestVideos from "@/components/common-components/latest-videos"
import { HeroCarousel } from "@/components/custom/hero-carousel"
const page = () => {
    return (
        <div>
            <HeroCarousel/>
            <Categories/>
            <LatestVideos/>
        </div>
    )
}

export default page