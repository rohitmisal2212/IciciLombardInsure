import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const CarCompNav = () => {
    return (
        <>
            <Form>
                <div className="container details">
                    <div>
                        <p>Car registration no.*</p>
                        <input type="text" placeholder='Car No' />
                    </div>
                    <div>
                        <p>Enter Mobile Number</p>
                        <input type="text " placeholder='Mobile Number' />
                    </div>
                    <div>
                        <p>Enter Mobile Number</p>
                        <input type="text " placeholder='Mobile Number' />
                    </div>
                    <div>
                        <Button style={{ backgroundColor: "#ec6608", borderRadius: '20px' }}>Get Quote</Button>
                    </div>
                </div>
                <br />
                <div style={{ margin: "0px 50px" }}>
                    <div className="container details1">
                        <div>
                            <Link to="/carInsurance">Got new Vehicle</Link>
                        </div>
                        <div>
                            <Link to="/">Recent Quote</Link>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}
export default CarCompNav
