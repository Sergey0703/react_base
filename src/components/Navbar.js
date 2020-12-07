import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
//<nav className="navbar navbar-dark navbar-expand-lg bg-primary" >
//<div className="navbar-brand">
//    Note App
//</div>
export const Navbar=()=>(
<div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">

            <div className="myclass1">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
     <ul className="navbar-nav mr-auto"  >
         <li className="nav-item "><NavLink className="nav-link" to="/" exact>Train words </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/trainwords2" exact>Train words2 </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/home" exact>Home </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/add" exact>Add </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/admin" exact>Admin </NavLink></li>
         <li className="nav-item "><NavLink className="nav-link" to="/about" exact>About </NavLink></li>
     </ul>
            </div>
        </nav>
</div>
    )

