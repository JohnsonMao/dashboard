import { createContext, useState, useMemo, useContext } from 'react';

const MenuContext = createContext({ open: false, toggleMenu: () => {} });

export const useMenuContext = () => {
    const ctx = useContext(MenuContext);

    return ctx;
};

export const MenuProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    const [open, setOpen] = useState(window.innerWidth >= 900);

    const MenuValue = useMemo(
        () => ({
            open,
            toggleMenu: () => {
                setOpen((prev) => !prev);
            }
        }),
        [open]
    );

    return (
        <MenuContext.Provider value={MenuValue}>
            {children}
        </MenuContext.Provider>
    );
};
