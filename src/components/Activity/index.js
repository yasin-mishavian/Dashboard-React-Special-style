import React from 'react'
import Activity from './Activity/Activity';
import Post from '../Posts/Post';

const Combination = () => {

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-12 '>
                        <div className='row justify-content-around'> 
                            <div  className='col-lg-7 '>
                                {<Activity/>}
                            </div>                           
                            <div  className='col-lg-5 '>
                                {<Post/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </>
    )
}

export default Combination
