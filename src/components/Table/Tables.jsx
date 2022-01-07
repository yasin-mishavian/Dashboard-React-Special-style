import React from 'react'
import Tickets from './Tickets'
import Payments from './Payments'

const Tables = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-xl-12'>
                        <div className='row'> 
                            <div  className='col-lg-6 '>
                                <h2 className='text-light p-3 mb-4 text-center'>تیکت هایه اخیر</h2>
                                {<Tickets/>}
                            </div>                           
                            <div  className='col-lg-6 '>
                                <h2 className='text-light p-3 mb-4 text-center'>پرداختی ها</h2>
                                {<Payments/>}                                                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tables
