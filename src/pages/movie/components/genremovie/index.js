import React from 'react'
import { Box } from '@mui/material'

import GeneroFunction from '../../../../components/genresfunction'

export default function GeneroFilme({Generos}){

    return(
        <Box
        m={2}
        flexWrap="wrap"
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            {
                Generos.map((item) => (
                    <>
                        <GeneroFunction
                        Tipo="Filme"
                        GeneroId={String(item.id)}
                        GeneroNome={item.name}
                        />
                    </>
                ))
            }
        </Box>
    )
}