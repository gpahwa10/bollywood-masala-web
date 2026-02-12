import Categories from "@/components/common-components/categories"
import { HeroCarousel } from "@/components/custom/hero-carousel";
import FeaturedVideos from "@/components/common-components/featured-vidoes";
import BehindTheScenes from "@/components/common-components/behind-the-scene";
import MasalaOnLocation from "@/components/common-components/masala-on-location";

export default function Home() {
  return <div>
      <HeroCarousel />
    <Categories />
    <FeaturedVideos />
    <BehindTheScenes />
    <MasalaOnLocation />
  </div>;
}
