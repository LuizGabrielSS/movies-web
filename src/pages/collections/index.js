import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ContainerFunction from '../../components/containerfunction'

import RequisicaoInicial from './requests/init'

export default function CollectionScreen(){

    const[Loading,SetLoading] = useState(true)

    const[Status,SetStatus] = useState(200)

    const[MovieData,SetMovieData] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        RequisicaoInicial(SetLoading,SetStatus,SetMovieData,id)
    },[id])

    return(
        <ContainerFunction
        Loading={Loading}
        Status={Status}
        >
            {
                MovieData !== null
                ?   <>
                    
                    </>
                : null
            }
        </ContainerFunction>
    )

}