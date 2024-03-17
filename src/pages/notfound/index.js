import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundView from './notfound.json'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle,DialogContentText,Button } from '@mui/material'

import ContainerFunction from '../../components/containerfunction'
import LottieFunction from '../../components/lottiefunction';

export default function NotFoundScreen({}){

    const navegacao = useNavigate()

    return(
        <ContainerFunction>
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
                    <DialogTitle>Ops! Parece que essa pagina não existe</DialogTitle>
                    <DialogContent dividers>
                        <DialogContentText>
                            A pagina desejada não existe,
                            Por favor, tente ir para uma das nossas paginas
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                        color="error"
                        autoFocus
                        onClick={() => navegacao('/')}
                        variant="contained"
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                <LottieFunction
                Caminho_Lottie={NotFoundView}
                />
            </Box>
        </ContainerFunction>
    )

}