import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { useNavigate } from "react-router-dom";

import ButtonFunction from '../buttonfunction';

export default function CardFunction({Adulto,Poster,Nome,NomeOriginal,Sinopse,DataLancamento,IdiomaOriginal,ID}){

    const data = parseISO(DataLancamento);
    
    const dataFormatada = format(data, "EEEE, d 'de' MMMM 'de' yyyy", { locale: pt });

    const navegacao = useNavigate();

    return(
        <Box
        m={2}
        p={2}
        >
            <Card
            >
                <CardHeader
                title={Nome}
                subheader={`${NomeOriginal}(${IdiomaOriginal})`}
                avatar={
                    <Avatar sx={{ 
                        bgcolor: 
                        Adulto
                        ? "#ff0000"
                        : "#00ff00"
                        }}>
                        {
                            Adulto
                            ? "+18"
                            : "L"
                        }
                    </Avatar>
                  }
                />
                <Box
                px={9}
                >
                    <CardMedia
                    component="img"
                    height={
                        window.innerWidth > 420
                        ?'90%'
                        : '100%' 
                    }
                    alt={Nome}
                    image={Poster}
                    />
                </Box>
                <CardContent>
                <Typography variant="body1" color="text.main">
                    {Sinopse}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Data de lançamento: {dataFormatada}
                </Typography>
            </CardContent>
            <CardActions 
            disableSpacing
            >
                <Box>
                    <ButtonFunction
                    ButtonFunction={()=>navegacao(`/movie/${ID}`)}
                    Titulo="Ver mais"
                    />
                </Box>
            </CardActions>
            </Card>
        </Box>
    )

}