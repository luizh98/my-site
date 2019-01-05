import React from 'react'
import AOS from 'aos';

const Portfolio = props => {
    //inicializando 
    AOS.init();

    return (

        <div>
            <br />
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={require('../img/portfolio/cabin.png')} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={require('../img/portfolio/cake.png')} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={require('../img/portfolio/circus.png')} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={require('../img/portfolio/game.png')} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={require('../img/portfolio/safe.png')} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={require('../img/portfolio/submarine.png')} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Modal 1 */}
            <div className="portfolio-modal mfp-hide" id="portfolio-modal-1" />
            <div className="portfolio-modal-dialog bg-white">

                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                            <hr className="star-dark mb-5" />
                            <img className="img-fluid mb-5" src={require('../img/portfolio/cabin.png')} alt="" />
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Modal 2 */}
            < div className="portfolio-modal mfp-hide" id="portfolio-modal-2" >
                <div className="portfolio-modal-dialog bg-white">

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src={require('../img/portfolio/cake.png')} alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Portfolio Modal 3 */}
            < div className="portfolio-modal mfp-hide" id="portfolio-modal-3" >
                <div className="portfolio-modal-dialog bg-white">

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src={require('../img/portfolio/circus.png')} alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Portfolio Modal 4 */}
            < div className="portfolio-modal mfp-hide" id="portfolio-modal-4" >
                <div className="portfolio-modal-dialog bg-white">

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src={require('../img/portfolio/game.png')} alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Portfolio Modal 5 */}
            < div className="portfolio-modal mfp-hide" id="portfolio-modal-5" >
                <div className="portfolio-modal-dialog bg-white">

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src={require('../img/portfolio/safe.png')} alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Portfolio Modal 6 */}
            < div className="portfolio-modal mfp-hide" id="portfolio-modal-6" >
                <div className="portfolio-modal-dialog bg-white">

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src={require('../img/portfolio/submarine.png')} alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Portfolio