import SideNavigation from '../_components/SideNavigation';

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] h-full gap-6 sm:gap-12">
      {/* Sidebar: Hidden on mobile, visible on tablets & desktops */}

      <SideNavigation />

      {/* Main Content */}
      <div className="py-1 px-4 sm:px-0">{children}</div>
    </div>
  );
}
