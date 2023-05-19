import React from 'react'
import './Landing.css'
import image2 from '../Landing/nmucamp1.jpg'
import image1 from '../Landing/banner02.jpg'
import image3 from '../Landing/banner0111.jpg'
import image4 from '../Landing/banner03.jpg'
import title from '../Landing/univercity.jpg'
import profile1 from '../Landing/chancellor_governor.jpeg'
import profile2 from '../Landing/vc.jpg'
import profile3 from '../Landing/vice-Chancellor.jpg'
import profile4 from '../Landing/registrar.JPG'

const Landing = () => {

    return (
        <div className='container-fluid'>
            <div className='title-div'>
                <img src={title} alt='title' className='title-img'></img>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid d-block w-100" src={image1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid d-block w-100" src={image2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid d-block w-100" src={image3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid d-block w-100" src={image4} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-3 '>
                    <div className="card p-5">
                        <img className="img-fluid d-block profileimg" src={profile1}></img>
                        <div className="card-body ">
                            <h5 className="card-title text-center">Hon'ble Chancellor</h5>
                            <p className="card-text text-center">Shri Ramesh Bais</p>
                            <div className='d-flex justify-content-center'>
                                <a className="readmore1" href="https://rajbhavan-maharashtra.gov.in/en/governors-profile/" text="Click here to know more">Profile</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-3'>
                    <div className="card p-5">
                        <img className="img-fluid d-block profileimg" src={profile2}></img>
                        <div className="card-body">
                            <h5 className="card-title text-center">Hon'ble Vice-Chancellor</h5>
                            <p className="card-text text-center">Prof. V. L. Maheshwari</p>
                            <div className='d-flex justify-content-center'>
                                <a className="readmore1" href="http://nmu.ac.in/Administration/Vice-Chancellor-Office">Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3'>
                    <div className="card p-5">
                        <img className="img-fluid d-block profileimg" src={profile3}></img>
                        <div className="card-body">
                            <h5 className="card-title text-center">Hon'ble Pro Vice-Chancellor</h5>
                            <p className="card-text text-center">Prof. S. T. Ingle</p>
                            <div className='d-flex justify-content-center'>
                                <a className="readmore1" href="http://nmu.ac.in/Administration/Pro-Vice-Chancellor-Office">Profile</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-3 '>
                    <div className="card p-5">
                        <img className="img-fluid d-block profileimg" src={profile4}></img>
                        <div className="card-body">
                            <h5 className="card-title text-center">Registrar</h5>
                            <p className="card-text text-center">Dr. Vinod Patil</p>
                            <div className='d-flex justify-content-center'>
                                <a className="readmore1" href="http://nmu.ac.in/Administration/Registrar-Office">Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing