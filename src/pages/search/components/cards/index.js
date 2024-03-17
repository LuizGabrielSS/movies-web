import React from 'react'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function CardsFunction({poster,Titulo,id}){

    const navegacao = useNavigate();

    return(
        <Box
        m={2}
        >
            <Button
        onClick={()=>navegacao(`/movie/${id}`)}
        fullWidth
        m={2}
        variant="outlined"
        color="button"
        >
            <Box
            display="flex"
            >
                <Box
                m={1}
                sx={{
                    width: 
                    window.innerWidth > 420
                    ? (window.innerWidth/15)
                    : (window.innerWidth/4),
                    height:window.innerWidth > 420
                    ? (window.innerHeight/5)
                    : (window.innerHeight/4),
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
                    ? (window.innerHeight/5)
                    : (window.innerHeight/4),
                }}
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
                        ? "body1"
                        : "body1"
                    }>
                        {Titulo}
                    </Typography>
                </Box>
            </Box>
        </Button>
        </Box>
        
    )

}