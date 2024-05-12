import React from 'react'
import { useParams } from 'react-router-dom';

export const User = () => {
    const {username} = useParams()
  return (
    <>
    <div>This is User Page </div>
    <h1>
        username: {username}
    </h1>
    </>
  )
}
