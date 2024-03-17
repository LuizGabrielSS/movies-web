import React, { useEffect, useState } from 'react'

import ContainerFunction from '../../components/containerfunction'
import CardFunction from '../../components/cards'

import RequisicaoInicial from './requests/init'

export default function HomeScreen(){

    const[DataMovies,SetDataMovies] = useState([])

    const[Loading,SetLoading] = useState(true)

    const[Status,SetStatus] = useState(200)

    useEffect(() => {
        RequisicaoInicial(SetLoading,SetStatus,SetDataMovies)
    },[])

    return(
        <ContainerFunction
        Loading={Loading}
        Status={Status}
        >
            {
                DataMovies.length !== 0
                ?   <>
                        {
                            DataMovies.results.map((item) => (
                                <>
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
                            ))
                        }
                    </>
                : null
            }
        </ContainerFunction>
    )

}