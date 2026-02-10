import AppSidebar from "@/components/custom/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/custom/footer";
import CtaBanner from "@/components/custom/cta-banner";
import DistributionNetwork from "@/components/custom/distribution-network";
import Header from "@/components/custom/header";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-[#EFEFEF]">
      <SidebarProvider>
        <AppSidebar />
        <main className="relative flex-1 px-[24px] pb-[24px] gap-4">
          <Header />
          {children}
          <CtaBanner />
          <DistributionNetwork />
          <Footer />
        </main>
      </SidebarProvider>
    </div>
  );
}
