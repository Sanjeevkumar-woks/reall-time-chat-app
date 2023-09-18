import { Box, Stack } from '@mui/material'
import React from 'react'
import { MediaMsg, ReplyMsg, TextMsg, Timeline } from './conversation';


function Message({Chat_History}) {


    return (
        <Box p={3}>
            <Stack spacing={3}>
                {
                    Chat_History.map((el) => {
                        switch (el.type) {
                            case "divider":
                                return <Timeline el={el} />
                            case "msg":
                                switch (el.subtype) {
                                    case "img":
                                        return <MediaMsg el={el} />
                                    case "reply":
                                        return <ReplyMsg el={el} />
                                    default:
                                        return <TextMsg el={el} />
                                }
                            case "link":
                                break;
                            case "doc":
                                break;
                            default:
                                break;
                        }
                    })
                }
            </Stack>
        </Box>
    )
}

export default Message