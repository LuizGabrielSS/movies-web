import React from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import ButtonFunction from '../../../../components/buttonfunction'

export default function CollectionFunction({ID}){

    const navegacao = useNavigate();

    return(
        <Box
        m={2}
        >
            <ButtonFunction
            Titulo="Ver coleção"
            ButtonFunction={()=>navegacao(`/movie/collection/${ID}`)}
            />
        </Box>
    )

}