import './dashboard.css'
import Sidebar from '../../components/sidebar/sidebar'
import Chatlist from '../../components/chatlist/Chatlist';
import Chatwindow from '../../components/chatwindow/Chatwindow';
import { Box, Divider, Stack } from '@mui/material';


function Dashboard() {

    
    return (
        <Box className='dashboard-container' sx={{
            display: "flex",
            width: "100%",
            height: "100vh"
        }}>
            <Stack className='left'>
                <Sidebar />
                <Stack className='chat-list'>
                    <Chatlist />
                </Stack>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack className='right'>
                <Chatwindow />
            </Stack>
        </Box>
    )
}

export default Dashboard