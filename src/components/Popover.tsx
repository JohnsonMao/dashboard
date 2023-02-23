import { useState } from 'react';

/* Mui */
import MuiPopover, {
    PopoverProps as MuiPopoverProps
} from '@mui/material/Popover';
import Box from '@mui/material/Box';

export interface PopoverProps extends Partial<MuiPopoverProps> {
    mode: 'hover' | 'click';
    popoverContent: React.ReactNode;
    children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = (props) => {
    const { children, popoverContent, mode, ...restProps } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const isClickMode = mode === 'click';

    const hoverMode = {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose
    };

    const clickMode = {
        onClick: handlePopoverOpen
    };

    return (
        <Box>
            <Box {...(isClickMode ? clickMode : hoverMode)}>{children}</Box>
            {popoverContent && (
                <MuiPopover
                    sx={{ pointerEvents: isClickMode ? 'auto' : 'none' }}
                    open={!!anchorEl}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    {...restProps}
                >
                    <Box sx={{ p: 1 }}>{popoverContent}</Box>
                </MuiPopover>
            )}
        </Box>
    );
};

export default Popover;
