import React, { Component } from 'react';


class Site extends Component {
    render() {
        return (
            <div>
                <div className="copyright py-4 text-center text-white">
                    <div className="container">
                        <small>Copyright &copy; Your Website 2018</small>
                    </div>
                </div>

                {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
                <div className="scroll-to-top d-lg-none position-fixed ">
                    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                        <i className="fa fa-chevron-up"></i>
                    </a>
                </div>

                {/* Portfolio Modals */}

                {/* Portfolio Modal 1 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-1" />
                <div className="portfolio-modal-dialog bg-white">
                    <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                        <i className="fa fa-3x fa-times"></i>
                    </a>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src="img/portfolio/cabin.png" alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                    <i className="fa fa-close"></i>
                                    Close Project</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Portfolio Modal 2 */}
                < div className="portfolio-modal mfp-hide" id="portfolio-modal-2" >
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="img/portfolio/cake.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Portfolio Modal 3 */}
                < div className="portfolio-modal mfp-hide" id="portfolio-modal-3" >
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="img/portfolio/circus.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Portfolio Modal 4 */}
                < div className="portfolio-modal mfp-hide" id="portfolio-modal-4" >
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="img/portfolio/game.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Portfolio Modal 5 */}
                < div className="portfolio-modal mfp-hide" id="portfolio-modal-5" >
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="img/portfolio/safe.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Portfolio Modal 6 */}
                < div className="portfolio-modal mfp-hide" id="portfolio-modal-6" >
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="img/portfolio/submarine.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default Site;