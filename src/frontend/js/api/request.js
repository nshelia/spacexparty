import axios from 'axios'
import qs from 'qs'

const host = "https://api.spacexdata.com/v3"

export const getRequest = (service,query) => {
  const queries = qs.stringify(query, { addQueryPrefix: true })
  const url = `${host}/${service}${queries}`


  return axios.get(url)
}

export const postRequest = (service,query) => {
  const queries = qs.stringify(query, { addQueryPrefix: true })
  const url = `${host}/${service}${queries}`


  return axios.post(url)
}