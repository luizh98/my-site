import React from 'react'

const Inicio = props => {
    return (
        <header className="masthead bg-primary text-white text-center" >
            <div className="container">
                <img className="img-fluid mb-5 d-block mx-auto" src={require('../img/profile.png')} alt="" />
                <h1 className="text-uppercase mb-0">Start Bootstrap</h1>
                <hr className="star-light" />
                <h2 className="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2>
            </div>
        </header >
    )
}

export default Inicio