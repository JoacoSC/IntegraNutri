import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    
    const [data, setData] = useState(null)

    useEffect(() => {
        
        fetch( url, {
            method: 'GET'
        })
            .then( (response) => response.json() )
            .then( (data) => setData( data ) )
    }, [])
    
    return { data }
}