import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ButtonFunction from '../../../../components/buttonfunction';

function TextSinopse({Sinopse}){

    return(
        <Box
        m={2}
        >
            <Typography color="text.main"
            variant={
                window.innerWidth > 420
                ?"subtitle2"
                :"body1"
            }
            >
                {Sinopse}
            </Typography>
        </Box>
    )

}

export default function SinopseFunction({Sinopse}){

    const[Open,SetOpen] = useState(false)

    return(
        <Box
        m={2}
        >
            <Box
            my={2}
            >
                <ButtonFunction
                Titulo="Sinopse"
                ButtonFunction={()=>SetOpen(!Open)}
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
            </Box>
            {
                Open
                ?   <TextSinopse
                        Sinopse={Sinopse}
                    />
                : null
            }
        </Box>
    )

}