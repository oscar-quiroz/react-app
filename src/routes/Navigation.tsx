import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink,Navigate} from 'react-router-dom'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? 'nav-active' : ''}>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active' : ''}>About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active' : ''}>Users </NavLink>
                    </li>
                </ul>
            </nav>
           
           <Routes>
               <Route path="/" element={<h1>Hola home</h1>}></Route>
               <Route path="/about" element={<h1>Hola About</h1>}></Route>
               <Route path="/users" element={<h1>Hola Users</h1>}></Route>
               <Route path="/*" element={ <Navigate to="/"/> }></Route>

           </Routes>
        </div>
    </BrowserRouter>
  )
}
