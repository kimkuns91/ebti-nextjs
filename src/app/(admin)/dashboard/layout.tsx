import SideNavBar from '@/components/Dashboard/SideNavBar';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideNavBar />
      <div className="flex-1 overflow-scroll px-6 py-8">{children}</div>
    </div>
  );
}
