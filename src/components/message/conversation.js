import { Box, Divider, Stack, Typography } from "@mui/material"

export const Timeline = ({ el }) => {

    return <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Divider width="46%" />
        <Typography variant="caption" sx={{ color: "lightgray" }}>
            {el.text}
        </Typography>
        <Divider width="46%" />
    </Stack>
}


export const TextMsg = ({ el }) => {
    return (
        <Stack direction="row" alignItems='center' justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ background: el.incoming ? "white" : "lightgreen", borderRadius: 1.5, width: "max-content"  }} >
                <Typography variant="body2"  >
                    {el.message}
                </Typography>
            </Box>

        </Stack>
    )
}

export const MediaMsg = ({ el }) => {
    return (<Stack direction="row" alignItems='center' justifyContent={el.incoming ? "start" : "end"}>
        <Box p={1.5} sx={{ background: el.incoming ? "white" : "lightgreen", borderRadius: 1.5, width: "max-content" }}>
            <Stack spacing={1}>
                <img alt={el.subtype} src={el.img} style={{ maxHeight: 210, borderRadius: "10px" }} />
                <Typography variant="body2" >
                    {el.message}
                </Typography>
            </Stack>
        </Box>

    </Stack>)
}


export const ReplyMsg = ({ el }) => {
    return (
        <Stack direction="row" alignItems='center' justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ background: el.incoming ? "white" : "lightgreen", borderRadius: 1.5, width: "max-content" }}>
                <Stack spacing={2}>
                    <Stack p={2} direction="column" spacing={3} alignItems="center">
                        <Typography p={2} variant="body2" sx={{ background: "#ffff", width: "100%" }}>
                            {el.reply}
                        </Typography>
                    </Stack>
                    <Typography variant="body2"  >
                        {el.message}
                    </Typography>
                </Stack>

            </Box>

        </Stack>
    )
}

