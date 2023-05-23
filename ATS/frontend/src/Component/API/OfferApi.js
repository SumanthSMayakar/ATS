import axios from 'axios'

const axiosIns = axios.create({ 
    baseURL : 'http://localhost:3000'
})

const OfferApi = {
    getalloffer : ()=>{
        return axiosIns.request({
            url : '/api/v1/offer/all',
            method : 'GET'
        })
    },
    createoffer : ()=>{
        return axiosIns.request({
            url : '/api/v1/offer/createoffer',
            method : 'POST'
        })
    },
    updateoffer: (offer, id)=>{
        return axiosIns.request({
            url : `/api/v1/offer/updateoffer/${id}`,
            method : 'PATCH',
            data : offer
        })
    },
    deleteoffer : (id)=>{
        return axiosIns.request({
            url : `/api/v1/offer/deleteoffer/${id}`,
            method : "DELETE"
        })
    }
}

export default OfferApi