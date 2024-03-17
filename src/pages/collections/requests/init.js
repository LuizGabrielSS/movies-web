import api from '../../../services/api'

export default function RequisicaoInicial(SetLoading,SetStatus,SetMovieData,id){

    const params = {
        "language":"pt-BR"
    }

    const headers = {
        "accept":"application/json",
        "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
    }

    api.get(`collection/${id}`,{
        params:params,
        headers:headers
    })
    .then((res) => (
        SetMovieData(res.data),
        SetStatus(res.status)
    )).catch((error) => {
        SetStatus(error.status)
    })

    SetLoading(false)

}