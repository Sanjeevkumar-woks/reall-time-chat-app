import React, { useState } from 'react'
import { Avatar, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { CallList } from '../../data';
function Chatlist() {
    const [selected, setSelected] = useState(0);

    const handleList = (id) => {
        setSelected(id);
    }
    return (
        <>
            <Box className='search-box'>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search contact ..."
                    inputProps={{ 'aria-label': 'search contact ...' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </Box>
            <Divider />
            <Box className='chat-list'>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    {
                        CallList.map((call) => <>
                            <ListItem key={call.id} sx={{ bgcolor: selected === call.id ? 'blanchedalmond' : 'background.paper', width: '100%' }} onClick={() => handleList(call.id)}>
                                <ListItemAvatar>
                                    <Avatar alt={call.name} src={call.img} />
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>

                        )}
                </List>
            </Box>
        </>
    )
}

export default Chatlist