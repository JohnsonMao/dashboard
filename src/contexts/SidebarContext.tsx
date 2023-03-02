import { createContext, useState, useMemo, useContext } from 'react';

const SidebarContext = createContext({ open: false, toggleSidebar: () => {} });

export const useSidebar = () => useContext(SidebarContext);

export function SidebarProvider(props: React.PropsWithChildren) {
    const { children } = props;
    const isDasktop = window.innerWidth >= 900;
    const [open, setOpen] = useState(isDasktop);

    const SidebarValue = useMemo(
        () => ({
            open,
            toggleSidebar: () => {
                setOpen((prev) => !prev);
            }
        }),
        [open]
    );

    return (
        <SidebarContext.Provider value={SidebarValue}>
            {children}
        </SidebarContext.Provider>
    );
}
