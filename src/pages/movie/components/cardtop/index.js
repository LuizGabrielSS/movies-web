import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function IndicacaoComponent({Indicacao}){


    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={2}
        >
                <Avatar 
                sx={{ 
                    bgcolor: 
                    Indicacao
                    ? "#ff0000"
                    : "#00ff00"
                }}>
                {
                    Indicacao
                    ? "+18"
                    : "L"
                }
                </Avatar>
                <Box
            m={1}
            >
                <Typography
            color="text.secondary"
            variant={
                window.innerWidth > 420
                ? "body1"
                : "body2"
            }
            >
                {
                    Indicacao
                    ? "Proibido para menores"
                    : "Livre"
                }
            </Typography>
            </Box>
            
        </Box>
    )

}

function TempoComponent({Tempo}){

    return(
        <Box
        m={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <AccessTimeIcon 
            sx={{
                color:"text.main",
                width:
                window.innerWidth > 420
                    ?'10%'
                    : '20%', 
                height: 
                window.innerWidth > 420
                ?'10%'
                : '20%', 
            }}
            />
            <Typography
            color="text.secondary"
            variant={
                window.innerWidth > 420
                ?"subtitle2"
                :"body1"
            }
            >
            :{Tempo} Min
        </Typography>
        </Box>
    )

}

function LancadoComponent({Lancado}){

    return(
        <Box
        p={1}
        bgcolor={
        Lancado === "Released"
        ? "#00ff00"
        : "#ff0000"
        }
        sx={{
            border: 1,
            borderRadius: 10,
            borderColor:Lancado === "Released"
            ? "#000"
            : "#fff"
        }}
        >
            <Typography
            style={{
                color:Lancado === "Released"
                ? "#000"
                : "#fff"
            }}
            >
                {
                    Lancado === "Released"
                    ? "Lançado"
                    : "Aguardando lançamento"
                }
            </Typography>
        </Box>
    )

}

export default function CardTop({Titulo,Tempo,Poster,Lancado,Indicacao,Lancamento}){

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
                    src={Poster}
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
                        Lançado em {Lancamento}
                    </Typography>
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap= "wrap"
                    >
                        <IndicacaoComponent
                        Indicacao={Indicacao}
                        />
                        <TempoComponent
                        Tempo={Tempo}
                        />
                        <LancadoComponent
                        Lancado={Lancado}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}