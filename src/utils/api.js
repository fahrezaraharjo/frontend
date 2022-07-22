import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export const getHotels = (params) =>
    request.get('Hotels', {params}).then((Response) => {
        return Response.data
    }).catch(err => {
        console.log(err)
    })

    export const getHotel = (id) =>
    request.get(`Hotels/find/${id}`).then((Response) => {
        return Response.data
    }).catch(err => {
        console.log(err)
    })

    export const addHotel = (value) =>
    request.post('Hotels',value).then((Response) => {
        return Response.data
    }).catch(err => {
        console.log(err)
    })

    export const updateHotel = (id, value) =>
    request.put(`Hotels/${id}`,value).then((Response) => {
        return Response.data
    }).catch(err => {
        console.log(err)
    })








