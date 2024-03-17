import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

import { FaGun } from "react-icons/fa6";
import { GiSpectre,GiHeavenGate,GiFlyingDagger,GiCrimeSceneTape,GiDramaMasks,GiFamilyHouse,GiMagickTrick,GiGhost,GiMusicalNotes,GiEternalLove,GiTv,GiWesternHat } from "react-icons/gi";
import { SiStartrek } from "react-icons/si";
import { MdOutlineTheaterComedy,MdOutlineWbIncandescent } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaHistory,FaFighterJet } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";

function GeneroComponent({Nome,Icone}){

    const theme = useSelector((state) => state.mode.darkmode);

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Box
            m={1}
            height="70%"
            width="%70"
            >
                <Icone
                style={{
                    color:theme.mode === "light"
                    ? "#000"
                    : "#fff",
                    width: '100%',
                    height: '100%'
                }}
                />
            </Box>
            <Box
            m={1}
            height="30%"
            width="%30"
            >
                <Typography
                color="text.main"
                >
                    {Nome}
                </Typography>
            </Box>
        </Box>
    )

}

export default function GeneroFunction({Tipo,GeneroId,GeneroNome}){

    if(Tipo === "Filme"){
        if(GeneroId === "28"){
            return(
                <GeneroComponent
                Icone={FaGun}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "12"){
            return(
                <GeneroComponent
                Icone={GiHeavenGate}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "16"){
            return(
                <GeneroComponent
                Icone={GiFlyingDagger}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "35"){
            return(
                <GeneroComponent
                Icone={MdOutlineTheaterComedy}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "80"){
            return(
                <GeneroComponent
                Icone={GiCrimeSceneTape}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "99"){
            return(
                <GeneroComponent
                Icone={IoIosDocument}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "18"){
            return(
                <GeneroComponent
                Icone={GiDramaMasks}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "10751"){
            return(
                <GeneroComponent
                Icone={GiFamilyHouse}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "14"){
            return(
                <GeneroComponent
                Icone={GiMagickTrick}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "36"){
            return(
                <GeneroComponent
                Icone={FaHistory}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "27"){
            return(
                <GeneroComponent
                Icone={GiGhost}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "10402"){
            return(
                <GeneroComponent
                Icone={GiMusicalNotes}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "9648"){
            return(
                <GeneroComponent
                Icone={MdOutlineWbIncandescent}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "10749"){
            return(
                <GeneroComponent
                Icone={GiEternalLove}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "878"){
            return(
                <GeneroComponent
                Icone={SiStartrek}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "10770"){
            return(
                <GeneroComponent
                Icone={GiTv}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "53"){
            return(
                <GeneroComponent
                Icone={GiSpectre}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "10752"){
            return(
                <GeneroComponent
                Icone={FaFighterJet}
                Nome={GeneroNome}
                />
            )
        }else if(GeneroId === "37"){
            return(
                <GeneroComponent
                Icone={GiWesternHat}
                Nome={GeneroNome}
                />
            )
        }else{
            return(
                <GeneroComponent
                Icone={GrStatusUnknown}
                Nome={GeneroNome}
                />
            )
        }
    }
    
}