import React from 'react'
import "./HomeComp.css"
import CarCompNav from './CarCompNav'
import SideImgBar from './SideImgBar'


const HomeComp = () => {
    return (
        <>
            <div >
                <img className='MainImg1' src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/main-banner-bg.jpg?sfvrsn=39fd6d95_2" alt="" />
                <img className='MainImg2' src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/banner-img.png" alt="" />
                <p className='mainHeading1'>
                    <h2>Over 4 crore customers have faith in <br /> us because we care.</h2>
                </p>
            </div>
            <div className='MainBar'>
                <div className="fontopt">
                    <div className='fontComp'>
                        <div className='fontIcon'>
                            <img src="imageMain/car.png" alt="" />
                        </div>
                        <p>car</p>
                    </div>
                    <div className='fontComp'>
                        <div className='fontIcon'>
                            <img src="imageMain/bike.png" alt="" />
                        </div>
                        <p>Bike</p>
                    </div>
                    <div className='fontComp'>
                        <div className='fontIcon'>
                            <img src="imageMain/health.png" alt="" />
                        </div>
                        <p>Health</p>
                    </div>
                    <div className='fontComp'>
                        <div className='fontIcon'>
                            <img src="imageMain/travel.png" alt="" />
                        </div>
                        <p>Travel</p>
                    </div>
                    <div className='fontComp'>
                        <div className='fontIcon'>
                            <img src="imageMain/bussiness.png" alt="" />
                        </div>
                        <p>Bussiness</p>
                    </div>
                    <div className='fontComp'>
                        <div className='fontIcon'>
                            <img src="imageMain/renewal.png" alt="" />
                        </div>
                        <p>Renewal</p>
                    </div>
                </div>
                <hr />
                <div className="Navigation">
                    <CarCompNav />
                </div>
            </div >
            <div>
                <SideImgBar />
            </div>
            <div className='bottomInfo'>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I agree to the terms & conditions
                    </label>
                </div>
                <div>
                    |
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I want to get my quote and policy details on
                    </label>
                </div>
            </div>
            <div className='bottomInfo1'>
                <div>
                    <h3>2.17 Crore</h3>
                    <p> Policies issued</p>
                </div>
                <div>
                    <h3>
                        1.6 Million
                    </h3>
                    <p>
                        Claims settled
                    </p>
                </div>
                <div>
                    <h3>
                        12000+
                    </h3>
                    <p>
                        Network garages
                    </p>
                </div>
                <div>
                    <h3>
                        7500+
                    </h3>
                    <p>
                        Healthcare providers: As <br />on March 31, 2023
                    </p>
                </div>
            </div>
        </>
    )
}
export default HomeComp
