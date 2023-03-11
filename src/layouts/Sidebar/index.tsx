import Desktop from './Sidebar.Desktop';
import Mobile, { SidebarProvider, SidebarButton } from './Sidebar.Mobile';

const Sidebar = {
    Desktop,
    Mobile,
    Provider: SidebarProvider
};

export const ToggleSidebarButton = SidebarButton;

export default Sidebar;
