import { forwardRef, memo } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';

/* Mui */
import Link, { LinkProps } from '@mui/material/Link';

const NavLink = forwardRef<HTMLAnchorElement, LinkProps & NavLinkProps>(
    (props, ref) => (
        <Link ref={ref} component={RouterLink} underline="none" {...props} />
    )
);

NavLink.displayName = 'NavLink';

export default memo(NavLink);
