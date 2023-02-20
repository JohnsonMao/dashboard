import { useState } from 'react';
import MuiPopover from '@mui/material/Popover';
import Box from '@mui/material/Box';

export interface PopoverProps extends React.PropsWithChildren {
    popoverContent: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = (props) => {
    const { children, popoverContent } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Box
                aria-owns={anchorEl ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </Box>
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
                    <Box sx={{ p: 1 }}>{popoverContent}</Box>
                </MuiPopover>
            )}
        </Box>
    );
};

export default Popover;
