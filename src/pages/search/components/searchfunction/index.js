import React, { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import RequisicaoMovies from '../../requests/movies'

export default function SearchFunction({SetMovieData,SetStatus}){

    const[SearchInput,SetSearchInput] = useState("")

    useEffect(()=>{
        if(SearchInput.length > 3){
            RequisicaoMovies(SetMovieData,SetStatus,SearchInput)
        }else{
            SetMovieData(null)
            SetStatus(200)
        }
    },[SearchInput])

    return(
        <Box
        m={2}
        >
            <TextField
            label="Digite o nome do filme"
            defaultValue={SearchInput}
            onChange={(value) => SetSearchInput(value.target.value)}
            fullWidth
            InputProps={{
                endAdornment:(
                    <SearchIcon 
                    />
                )
            }}
            />
        </Box>
    )
}