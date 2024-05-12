import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from './components/Home/Home.jsx'
import { About } from './components/About/About.jsx'
import { User } from './components/User/User.jsx'
import { Github } from './components/GitHub/Github.jsx'

//frist method

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path :"",
//         element: <Home/>
//       },
//       {
//         path :"about",
//         element: <About/>
//       }
//     ]
//   }
// ])



///second method///
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='github' element={<Github/>}/>
        <Route path='user/:username' element={<User/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
