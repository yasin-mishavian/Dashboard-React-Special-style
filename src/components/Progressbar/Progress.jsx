import React from 'react'
import TaskList from './../Tasks/TaskList'
import './Progress.scss';

const Progress = () => {
    return (
        <>
            <div className='container-fluid mt-5 '>
                <div className='row justify-content-center'>
                    <div className='col-12 '>
                        <div className='row justify-content-around'> 
                            <div  className='col-lg-6 down-active'>
                                {<TaskList/>}
                            </div>                           
                            <div  className='col-lg-6 progres-Style left-active'>
                                <div className='text-white p-2'>
                                    <h4 className='mb-4'>پروژه ها</h4>
                                    <h5 className='mb-3 mt-3'>کتابخانه آنلاین</h5>                                   
                                    <div className='progress' style={{height:'17px'}}>
                                        <div className='progress-bar progress-bar-striped progress-bar-animated fw-bold bg-danger' style={{width:'85%'}}></div>
                                    </div>                                    
                                </div>
                                <div className='text-white p-2 '>                                    
                                    <h5 className='mb-4 mt-3'>اپلیکیشن یاس</h5>                                   
                                    <div className='progress' style={{height:'17px'}}>
                                        <div className='progress-bar progress-bar-striped progress-bar-animated fw-bold bg-primary' style={{width:'45%'}}></div>
                                    </div>                                     
                                </div>                               
                                <div className='text-white p-2 pb-4'>                                   
                                    <h5 className='mb-4 mt-3'>وب سرویس</h5>                                   
                                    <div className='progress' style={{height:'17px'}}>
                                        <div className='progress-bar progress-bar-striped progress-bar-animated fw-bold bg-success' style={{width:'75%'}}></div>
                                    </div>                                 
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress
