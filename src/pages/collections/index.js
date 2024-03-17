import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ContainerFunction from '../../components/containerfunction'
import EmptyFunction from '../../components/empty'
import CardInfo from './components/cardinfo'
import CardTop from './components/cardtop'

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
                        <CardTop
                        Titulo={MovieData.name}
                        poster={`https://image.tmdb.org/t/p/w500/${MovieData.poster_path}`}
                        resumo={MovieData.overview}
                        />
                    {
                        MovieData.parts.map((item) => (
                            <>
                                <CardInfo
                                item={item}
                                />
                            </>
                        ))
                    }
                    </>
                : <EmptyFunction/>
            }
        </ContainerFunction>
    )

}