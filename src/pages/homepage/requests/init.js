import api from '../../../services/api'

export default function RequisicaoInicial(SetLoading,SetStatus,SetDataMovies){

    const params = {
        "page":'1',
        "language":"pt-BR"
    }

    const headers = {
        "accept":"application/json",
        "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
    }

    api.get('movie/popular',{
        params:params,
        headers:headers
    })
    .then((res) => (
        SetDataMovies(res.data),
        SetStatus(res.status)
    ))
    .catch((error) => {
        SetStatus(error.status)
    })

    SetLoading(false)
}