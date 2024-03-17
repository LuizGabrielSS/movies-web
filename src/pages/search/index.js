import React, { useState } from 'react'

import ContainerFunction from '../../components/containerfunction'
import EmptyFunction from '../../components/empty'
import CardsFunction from './components/cards'
import SearchFunction from './components/searchfunction'

export default function SearchScreen(){

    const[Status,SetStatus] = useState(200)

    const[MovieData,SetMovieData] = useState(null)

    return(
        <ContainerFunction
        Status={Status}
        >
            <SearchFunction
            SetMovieData={SetMovieData}
            SetStatus={SetStatus}
            />
            {
                MovieData !== null
                ?   <>
                    {
                        MovieData.results.map((item) => (
                            <>
                                <CardsFunction
                                Titulo={item.title}
                                id={item.id}
                                poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
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