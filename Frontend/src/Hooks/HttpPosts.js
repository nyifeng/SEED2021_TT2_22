import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosPost(url, data){

    const [request, setRequest] = useState({
      loading: false,
      data: null,
    })

    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const axios = require('axios')

    const config = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'x-api-key': 'IrZsuQz9Ns1h2yaHZwhmC2hjGq3xJXpG2KyqIJjG'
      }
    }

    useEffect(() => {
    axios.post(proxyurl+url, data, config )
    .then(response => {
      setRequest({
          loading: true,
          data: response.data,
      })
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err)
    })
  }, [])

    return request
}
