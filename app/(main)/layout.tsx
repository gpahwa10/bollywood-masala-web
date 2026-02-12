import AppSidebar from "@/components/custom/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/custom/footer";
import ConditionalCtaAndDistribution from "@/components/custom/conditional-cta-and-distribution";
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
        <main className="relative flex-1 px-4 sm:px-5 md:px-6 pb-4 sm:pb-6 gap-4 min-w-0 overflow-x-hidden">
          <Header />
          {children}
          <ConditionalCtaAndDistribution />
          <Footer />
        </main>
      </SidebarProvider>
    </div>
  );
}
