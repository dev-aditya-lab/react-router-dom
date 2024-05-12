import React from 'react';
import { Link,NavLink } from 'react-router-dom' ;

export const Header = () => {
  return (
    <>
        <Link to="/" >Logo</Link>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-800" : "text-gray-500"}`} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => `${isActive ? "text-blue-800" : "text-gray-500"}`} >About</NavLink>
            </li>
        </ul>
    </>
  )
}
