//Externas
import React from 'react'
import {Container,Box} from '@mui/material'
import { useSelector } from "react-redux";

//Internas
import LoadingScreen from './components/loading'
import ErrorScreen from './components/error'
import NetworkScreen from './components/network'
import Header from './components/header'

export default function ContainerFunction({Loading=false,Status=200,children}){

    const theme = useSelector((state) => state.mode.darkmode);

    return(
        <Box
        height="100%"
        width="100%"
        style={{
            backgroundColor:theme.mode === "light"
            ? null
            : "#000"
        }}
        marginBottom={0}
        >
            <Container
            marginBottom={0}
            >
            {
                Loading
                ? <LoadingScreen/>
                :   <>
                        {
                        Status === 200
                        ? 
                        <>
                        <Header/>
                        <Box
                        marginTop={9}
                        marginBottom={0}
                        >
                          {children}
                        </Box>
                        </>
                        :   <>
                                {
                                    Status.toLowerCase() === "network"
                                    ? <NetworkScreen/>
                                    : <ErrorScreen/>
                                }
                            </>
                        }
                    </>
            }
            </Container>
        </Box>
    )
}