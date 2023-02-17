import { useState, PropsWithChildren } from 'react';
import MuiPopover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export interface PopoverProps extends PropsWithChildren {
    popoverContent: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ children, popoverContent }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Typography
                aria-owns={anchorEl ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </Typography>
            {popoverContent && (
                <MuiPopover
                    sx={{
                        pointerEvents: 'none'
                    }}
                    open={!!anchorEl}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>{popoverContent}</Typography>
                </MuiPopover>
            )}
        </div>
    );
};

export default Popover;
