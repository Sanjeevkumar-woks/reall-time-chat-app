import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, IconButton } from '@mui/material';

const Nav_Buttons = [
    {
        index: 0,
        icon: <GroupsIcon />,
    },
    {
        index: 1,
        icon: <SlowMotionVideoIcon />,
    },
    {
        index: 2,
        icon: <MessageIcon />,
    },
    {
        index: 3,
        icon: <MoreVertIcon />,
    },
];

function Sidebar() {
    return (
        <>
            <Box className='nav-bar'>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='nav-icons'>
                    {Nav_Buttons.map((btn) => <IconButton key={btn.id}>{btn.icon}</IconButton>)}
                </div>
            </Box>
        </>
    )
}

export default Sidebar;