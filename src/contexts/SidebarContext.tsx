import { createContext, useState, useMemo, useContext } from 'react';

const SidebarContext = createContext({ open: false, toggleSidebar: () => {} });

export const useSidebarContext = () => {
    const ctx = useContext(SidebarContext);

    return ctx;
};

export const SidebarProvider: React.FC<React.PropsWithChildren> = (props) => {
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
};
