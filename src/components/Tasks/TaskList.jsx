import React,{useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa';
import {FaRegEdit} from 'react-icons/fa';

const TaskList = () => {
    return (
        <>
          <div>
                <h2 className='text-warning p-3 mb-3'>تسک ها</h2>
                <div className=''>
                    <div className='row row-cols-3 py-3 mb-4 align-content-center '>
                        <div className='col-1'>
                            <a title='پاک کردن'>
                                <i className='text-success'>{<FaTrashAlt className='task-Style'/>}</i>
                            </a>
                        </div>
                        <div className='col-1'>
                            <a title='ویرایش'>
                                <i className='text-success'>{<FaRegEdit className='task-Style2'/>}</i>
                            </a>
                        </div>                        
                        <div className='col-9 h5 text-light'>آماده کردن سمت بک اند</div>
                        <div className='col-1'>
                            <input type='checkbox'/>
                        </div>
                    </div>
                </div>    
                <div className=''>
                    <div className='row row-cols-3 py-3 mb-4 align-content-center '>
                        <div className='col-1'>
                            <a title='پاک کردن'>
                                <i className='text-success'>{<FaTrashAlt className='task-Style'/>}</i>
                            </a>
                        </div>
                        <div className='col-1'>
                            <a title='ویرایش'>
                                <i className='text-success'>{<FaRegEdit className='task-Style2'/>}</i>
                            </a>
                        </div>
                        
                        <div className='col-9 h5 text-light'>آماده کردن سمت بک اند</div>
                        <div className='col-1'>
                            <input type='checkbox' />
                        </div>
                    </div>
                </div>                            
                <div className=''>
                    <div className='row row-cols-3 py-3 mb-4 align-content-center '>
                        <div className='col-1'>
                            <a title='پاک کردن'>
                                <i className='text-success'>{<FaTrashAlt className='task-Style'/>}</i>
                            </a>
                        </div>
                        <div className='col-1'>
                            <a title='ویرایش'>
                                <i className='text-success'>{<FaRegEdit className='task-Style2'/>}</i>
                            </a>
                        </div>                        
                        <div className='col-9 h5 text-light'>آماده کردن سمت بک اند</div>
                        <div className='col-1'>
                            <input type='checkbox'/>
                        </div>
                    </div>
                </div>                                                        
            </div>              
        </>
    )
}

export default TaskList
