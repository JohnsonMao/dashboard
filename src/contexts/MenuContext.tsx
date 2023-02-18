import { createContext, useState, useMemo } from 'react';

export const MenuContext = createContext({ open: false, toggleMenu: () => {} });

const MenuProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [open, setOpen] = useState(false);

    const MenuValue = useMemo(
        () => ({
            open,
            toggleMenu: () => {
                setOpen((prev) => !prev);
            }
        }),
        [open]
    );

    return <MenuContext.Provider value={MenuValue}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
