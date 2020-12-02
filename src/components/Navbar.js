import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar=()=>(
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary" >
     <div className="navbar-brand">
         Note App
     </div>
     <ul className="navbar-nav">
         <li className="nav-item "><NavLink className="nav-link" to="/" exact>Train words </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/home" exact>Home </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/add" exact>Add </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/admin" exact>Admin </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/about" exact>About </NavLink></li>


     </ul>
    </nav>
    )

