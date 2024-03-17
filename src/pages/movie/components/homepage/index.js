import React from 'react'
import { Box } from '@mui/material'
import ButtonFunction from '../../../../components/buttonfunction'

export default function HomePage({Link}){

    return(
        <Box
        m={2}
        >
            <ButtonFunction
            Titulo="Pagina Oficial"
            ButtonFunction={() => window.location.href = Link}
            />
        </Box>
    )

}