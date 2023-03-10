import { forwardRef, memo } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';

/* Mui */
import Link, { LinkProps } from '@mui/material/Link';

function NavLink(
    props: LinkProps & NavLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
) {
    return (
        <Link ref={ref} component={RouterLink} underline="none" {...props} />
    );
}

export default memo(forwardRef(NavLink));
