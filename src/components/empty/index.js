import React from 'react'
import { Box } from '@mui/material'

import LottieFunction from '../lottiefunction'
import NotFoundView from './notfound.json'

export default function EmptyFunction({}){

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        >
            <LottieFunction
            Caminho_Lottie={NotFoundView}
            />
        </Box>
    )

}