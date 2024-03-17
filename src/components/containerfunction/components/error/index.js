import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import LottieFunction from '../../../lottiefunction'
import ErrorView from './error.json'

export default function LoadingScreen(){

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        >
            <Dialog
            open={true}
            >
                <DialogTitle>Parece que voce encontrou um bug</DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        Parece ter ocorrido um erro na sua solicitação,
                        Por favor relate ela ao desenvolvedor da plataforma
                    </DialogContentText>
                    
                </DialogContent>
            </Dialog>
            <LottieFunction
            Caminho_Lottie={ErrorView}
            />
        </Box>
    )

}