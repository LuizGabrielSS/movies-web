import React, { useState } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ButtonFunction from '../../../../components/buttonfunction'

function ProdutaComponent({id,logo,nome,origem}){

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Box
            height="100%"
            width="40%"
            >
                <Avatar
                variant="square"
                src={logo}
                alt={nome}
                sx={{ width: '100%', height: '100%' }}
                />
            </Box>
            <Box
            height="100%"
            width="40%"
            >
                <Box
                m={1}
                >
                    <Typography
                    color="text.main"
                    variant={
                        window.innerWidth > 420
                        ? "h5"
                        : "subtitle2"
                    }
                    >
                        {nome}
                    </Typography>
                </Box>
                <Box
                m={1}
                >
                    <Typography
                    color="text.secondary"
                    variant={
                        window.innerWidth > 420
                        ?"subtitle2"
                        :"body1"
                    }
                    >
                        País origem: {origem}
                    </Typography>
                </Box>
                
            </Box>
        </Box>
    )

}

function PaisesComponent({nome,iso}){

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Typography
                color="text.main"
                variant={
                    window.innerWidth > 420
                    ? "h5"
                    : "subtitle2"
                }
            >
                {nome}({iso})
            </Typography>
        </Box>
    )

}

export default function ProdutorasFunction({Produtoras,Paises}){

    const[OpenProdutoras,SetOpenProdutoras] = useState(false)

    const[OpenPaises,SetOpenPaises] = useState(false)

    return(
        <Box
        m={2}
        >
            <Box
            my={2}
            >
                <ButtonFunction
                Titulo="Produtoras"
                ButtonFunction={() => SetOpenProdutoras(!OpenProdutoras)}
                Icone={
                    OpenProdutoras
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
                OpenProdutoras
                ?   <>
                    {
                        Produtoras.map((item) => (
                            <>
                                <ProdutaComponent
                                id={item.id}
                                logo={
                                    item.logo_path !== null
                                    ? `https://image.tmdb.org/t/p/w500/${item.logo_path}`
                                    : 'https://cdn.vectorstock.com/i/1000x1000/21/19/unknown-person-flat-icon-vector-15222119.webp'
                                }
                                nome={item.name}
                                origem={item.origin_country}
                                />
                            </>
                        ))
                    }
                    </>
                : null
            }
            <Box
            my={2}
            >
                <ButtonFunction
                Titulo="Paises envolvidos na produção"
                ButtonFunction={() => SetOpenPaises(!OpenPaises)}
                Icone={
                    OpenPaises
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
                OpenPaises
                ?   <>
                    {
                        Paises.map((item) => (
                            <>
                                <PaisesComponent
                                nome={item.name}
                                iso={item.iso_3166_1}
                                />
                            </>
                        ))
                    }
                    </>
                : null
            }
        </Box>
    )

}