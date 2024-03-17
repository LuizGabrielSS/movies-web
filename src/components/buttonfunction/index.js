import React from 'react'
import { Button } from '@mui/material'

export default function ButtonFunction({Titulo,ButtonFunction,Icone=null,Desabilitar=false}){

    return(
        <Button
        fullWidth
        variant="outlined"
        onClick={() => ButtonFunction()}
        endIcon={Icone}
        color="button"
        disabled={Desabilitar}
        >
            {Titulo}
        </Button>
    )

}