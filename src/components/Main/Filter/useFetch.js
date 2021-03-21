import {useEffect, useState} from 'react'

function useFetch(url, options) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      try {
        let res = await fetch(url, options);
        res = await res.json();
        setResponse(res)
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }
    fetchData()
  }, [])
  return {
    response,
    error,
    loading
  }
}

export default useFetch
