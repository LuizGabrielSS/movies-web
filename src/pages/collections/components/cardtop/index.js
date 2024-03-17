import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'

export default function CardTopFunction({Titulo,poster,resumo}){

    return(
        <Box>
            <Box
            display="flex"
            >
                <Box
                m={1}
                sx={{
                    width: 
                    window.innerWidth > 420
                    ? (window.innerWidth/2)
                    : (window.innerWidth/2),
                    height:window.innerWidth > 420
                    ? (window.innerHeight*3/2)
                    : (window.innerHeight/2),
                }}
                >
                    <Avatar
                    variant="square"
                    src={poster}
                    alt={Titulo}
                    sx={{ width: '100%', height: '100%' }}
                    />
                </Box>
                <Box
                m={1}
                sx={{
                    width: 
                    window.innerWidth > 420
                    ? (window.innerWidth/2)
                    : (window.innerWidth/2),
                    height:window.innerWidth > 420
                    ? (window.innerHeight*3/2)
                    : (window.innerHeight/2),
                }}
                flexWrap= "wrap"
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <Typography 
                    paragraph
                    color="text.main"
                    display="block"
                    variant={
                        window.innerWidth > 420
                        ? "h1"
                        : "h6"
                    }>
                        {Titulo}
                    </Typography>
                    <Typography 
                    paragraph
                    color="text.secondary"
                    display="block"
                    variant={
                        window.innerWidth > 420
                        ? "h5"
                        : "body2"
                    }>
                        {resumo}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}