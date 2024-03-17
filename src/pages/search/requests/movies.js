import api from '../../../services/api'


export default function RequisicaoMovies(SetMovieData,SetStatus,SearchInput){

    const params = {
        "language":"pt-BR",
        "query":SearchInput
    }

    const headers = {
        "accept":"application/json",
        "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
    }

    api.get(`search/movie`,{
        params:params,
        headers:headers
    })
    .then((res) => (
        SetMovieData(res.data),
        SetStatus(res.status)
    )).catch((error) => {
        SetStatus(error.status)
    })

}