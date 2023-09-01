import React from 'react'
import "./CarInsurance.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CarInsurance = () => {
    return (
        <>
            <div className="container">
                <div className='Heading'>
                    <h1>
                        Car insurance
                    </h1>
                    <p>
                        Prices starting at just ₹2,094/yr
                    </p>
                </div>
                <div className="icon">
                    <div>
                        Doorstep Cashless
                        <br />RepairsH
                    </div>
                    <div>
                        Upto 50% off <br />
                        with NCBF
                    </div>
                    <div>
                        5700+ cashless <br />
                        network garagesC
                    </div>
                </div>
                <div className='img'>
                    <img src="./carInsure/car-widget-banner.png" alt="img" />
                </div>
            </div>
            <div className='info'>
                <div>
                    <input type="text" placeholder='Vehicale Registration Number' className='txt' />
                </div>
                <div>
                    <input type="text" placeholder='Mobile Number' className='txt' />
                </div>
                <div>
                    <input type="text" placeholder='Email' className='txt' />
                </div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            I want to receive updates on
                        </label>
                    </div>
                </div>
                <div>
                    <Button className='CarButton' style={{ backgroundColor: 'orangered' }}>Get Quote</Button>
                </div>
                <div>
                    <Button className='CarButton' variant="outline-secondary">Renew Your ICICI Lombard Policy</Button>
                </div>
                <div>
                    <Link to="">Retrieve quote</Link>
                    <Link style={{ margin: "0px 20px" }} to="">Get Third Party Insurance</Link>
                </div>
            </div>
        </>
    )
}
export default CarInsurance
