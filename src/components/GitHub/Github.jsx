import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'

export const Github = () => {

    const [data, setdeta] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/dev-aditya-lab')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setdeta(data)
        })
    }, [])
    

  return (
    <>Github followers:  {data.followers}
    <div>
        <img src={data.avatar_url} />
    </div>
    </>
  )
}
