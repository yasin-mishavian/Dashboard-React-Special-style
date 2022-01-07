import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid '>
                <div className='row justify-content-around'>
                    <div className='col-12 text-sm-center'>
                        <ul className='list-inline ms-5'>
                            <li className='list-inline-item mt-5 ms-5'>
                                <a href='#' className='text-light d-inline mx-4 fw-bold Footer_Style border-bottom text-decoration-none'> درباره ما </a>
                                <a href='#' className='text-light d-inline mx-4 fw-bold Footer_Style border-bottom text-decoration-none'> پشتیبانی </a>
                                <a href='#' className='text-light d-inline mx-4 fw-bold Footer_Style border-bottom text-decoration-none'> وبلاگ </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
