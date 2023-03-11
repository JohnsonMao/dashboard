import { useState } from 'react';

/* Mui */
import Box from '@mui/material/Box';
import MuiPopover, {
    PopoverProps as MuiPopoverProps
} from '@mui/material/Popover';

export type PopoverProps = {
    mode: 'hover' | 'click';
    triggerComponent: React.ReactNode;
} & Partial<MuiPopoverProps>;

function Popover(props: PopoverProps) {
    const { triggerComponent, mode, ...restProps } = props;
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
            <Box {...(isClickMode ? clickMode : hoverMode)}>
                {triggerComponent}
            </Box>
            <MuiPopover
                sx={{ pointerEvents: isClickMode ? 'auto' : 'none' }}
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                disableRestoreFocus
                {...restProps}
            />
        </Box>
    );
}

export default Popover;
