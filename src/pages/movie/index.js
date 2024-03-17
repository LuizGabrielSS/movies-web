import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ContainerFunction from '../../components/containerfunction'
import EmptyFunction from '../../components/empty'

import CardTop from './components/cardtop'
import SinopseFunction from './components/sinopse'
import ProdutorasFunction from './components/produtoras'
import GeneroFilme from './components/genremovie'
import HomePage from './components/homepage'
import CollectionFunction from './components/collections'

import RequisicaoInicial from './requests/init'

export default function MovieScreen(){

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
                        Titulo={MovieData.title}
                        Tempo={MovieData.runtime}
                        Poster={`https://image.tmdb.org/t/p/w500/${MovieData.poster_path}`}
                        Lancado={MovieData.status}
                        Indicacao={MovieData.adult}
                        Lancamento={MovieData.release_date}
                        />
                        <GeneroFilme
                        Generos={MovieData.genres}
                        />
                        <SinopseFunction
                        Sinopse={MovieData.overview}
                        />
                        {
                            MovieData.belongs_to_collection !== null
                            ? <CollectionFunction
                                ID={MovieData.belongs_to_collection.id}
                                />
                            : null
                        }
                        <ProdutorasFunction
                        Produtoras={MovieData.production_companies}
                        Paises={MovieData.production_countries}
                        />
                        <HomePage
                        Link={MovieData.homepage}
                        />
                    </>
                : <EmptyFunction/>
            }
            {/*
            talvez - coleçao
            */}
        </ContainerFunction>
    )

}