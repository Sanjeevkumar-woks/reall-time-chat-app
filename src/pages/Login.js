import { Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <Container sx={{mt:5}} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{width:"100%" }} direction="column" alignItems={"center"}>
        <img alt="logo"/>
        </Stack>
<Stack spacing={2} sx={{mb:5,position:"relative"}}>
  <Typography variant='h4'>Login to talk</Typography>
  <Stack direction={"row"} spacing={1.5}> 
<Typography variant='body2'>Nwe User?</Typography>
<Link to="/sigin"> Create an account</Link>
</Stack>



</Stack>


      </Stack>

    </Container>
  )
}

export default Login