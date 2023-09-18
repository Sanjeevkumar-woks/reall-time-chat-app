import React, { useState,useEffect } from 'react'
import { Avatar, Box, IconButton, Input, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Message from '../message/Message';
import { Chat_History } from '../../data'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import io from "socket.io-client";
const socket = io("http://localhost:5000");


const chat_Buttons = [
    {
        index: 0,
        icon: <CallIcon />,
    },
    {
        index: 1,
        icon: <VideocamIcon />,
    },
    {
        index: 2,
        icon: <SearchIcon />,
    },
    {
        index: 3,
        icon: <MoreVertIcon />,
    },
];
function Chatwindow() {
    const [open, SetOpen] = useState(false)

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("message", (message) => {
          console.log(message);
          setMessages([...messages, message]);
        });
      }, [messages]);
    
      const sendMessage = (e) => {
        e.preventDefault();
        socket.emit("chat", { username, message });
        setMessage("");
      };

    return (
        <>
            <Box className='message-box-profile'>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography variant='body2'>Sanjeev</Typography>
                </Stack>
                

                <div className='message-box-icons'>
                    {chat_Buttons.map((btn) => <IconButton key={btn.id}>{btn.icon}</IconButton>)}
                </div>
            </Box>
            <Box className='message-box'>
                <Message Chat_History={Chat_History} />
            </Box>
            <Box className='message-input'>
                <IconButton onClick={() => SetOpen(!open)}>
                    <SentimentSatisfiedAltIcon color="action" />
                </IconButton>
                <Box sx={{ display: open ? "" : "none", zIndex: 10, position: "fixed", bottom: 81 }}>
                    <Picker data={data} theme="light" onEmojiSelect={console.log} />
                </Box>
                <IconButton>
                    <AttachFileOutlinedIcon color="action" />
                </IconButton>
                <Typography className='message' component={Input} placeholder='Type a message....' onChange={(e)=>setMessage(e.target.value)}>
                </Typography>
                <IconButton onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
                <IconButton>
                    <MicIcon />
                </IconButton>

            </Box>
        </>
    )
}

export default Chatwindow