import React from 'react';
import Nav from "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio_vacio from './Inicio_vacio';
import App from "./App";



const Barra_nav = () => {
    return (
        <Router>
            <div>
                <div className="area"></div><nav className="main-menu">
                    <ul>
                        <li>
                            <Link to="/Inicio_vacio">
                                <i className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
                                    Inicio
                                </span>
                            </Link>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-users fa-2x"></i>
                                <span className="nav-text">
                                    Usuarios
                                </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-list fa-2x"></i>
                                <span className="nav-text">
                                    Listas
                                </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-folder-open fa-2x"></i>
                                <span className="nav-text">
                                    Documentos
                                </span>
                            </a>

                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bar-chart-o fa-2x"></i>
                                <span className="nav-text">
                                    Estadisticas
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-calendar fa-2x"></i>
                                <span className="nav-text">
                                    Calendario
                                </span>
                            </a>
                        </li>
                        <li>
                            <Link to="/App">
                                <i className="fa fa-table fa-2x"></i>
                                <span className="nav-text">
                                    Tablero
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-envelope fa-2x"></i>
                                <span className="nav-text">
                                    chat
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
                                    Informacion
                                </span>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li>
                            <a href="#">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">
                                    Cerrar sesion
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/Inicio_vacio">
                        <Inicio_vacio />
                    </Route>
                    <Route path="/App">
                       <App/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Barra_nav;