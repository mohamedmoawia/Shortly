import React from 'react';

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-md bg-white navbar-light pl-5 pr-5 pt-3">

        <a className="navbar-brand" href="#" style={{ fontSize: '2em' }}>Shortly</a>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Feature</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Resoures</a>
                </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
                <li><button className='btn'>Login</button></li>
                <li><button className='btn btn-info rounded-lg'>Sign Up</button></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar