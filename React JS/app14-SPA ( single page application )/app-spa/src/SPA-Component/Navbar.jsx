import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/about'} className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/details'} className="nav-link">
                                Details
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/location'} className="nav-link">
                                Location
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
