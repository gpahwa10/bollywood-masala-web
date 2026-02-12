"use client";

import { usePathname } from "next/navigation";
import CtaBanner from "@/components/custom/cta-banner";
import DistributionNetwork from "@/components/custom/distribution-network";

const HIDE_ON_PATHS = ["/settings"];

export default function ConditionalCtaAndDistribution() {
  const pathname = usePathname();
  const shouldHide = HIDE_ON_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  if (shouldHide) return null;

  return (
    <>
      <CtaBanner />
      <DistributionNetwork />
    </>
  );
}
