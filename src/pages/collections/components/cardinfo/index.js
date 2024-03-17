import React, { useState } from 'react'
import { Box } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ButtonFunction from '../../../../components/buttonfunction'
import CardFunction from '../../../../components/cards'

export default function CardInfo({item}){

    const[Open,SetOpen] = useState(false)

    return(
        <Box
        m={2}
        >
            <ButtonFunction
            ButtonFunction={() => SetOpen(!Open)}
            Titulo={item.title}
            Icone={
                Open
                ? <ArrowDropUpIcon
                    sx={{
                        color:"button"
                    }}
                    />
                : <ArrowDropDownIcon
                    sx={{
                        color:"button"
                    }}
                    />
            }
            />
            {
                Open
                ?   <>
                        <CardFunction
                        Adulto={item.adult}
                        DataLancamento={item.release_date}
                        IdiomaOriginal={item.original_language}
                        Nome={item.title}
                        NomeOriginal={item.original_title}
                        Poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        Sinopse={item.overview}
                        ID={item.id}
                        />
                    </>
                : null
            }
        </Box>
    )

}