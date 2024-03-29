import React from 'react'
import { Box } from '@mui/material'

import LottieFunction from '../../../lottiefunction'
import LoadingView from './loading.json'

export default function LoadingScreen(){

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        >
            <LottieFunction
            Caminho_Lottie={LoadingView}
            />
        </Box>
    )

}