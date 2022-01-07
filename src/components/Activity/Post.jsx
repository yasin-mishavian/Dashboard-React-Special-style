import React from 'react'
import {BiEditAlt} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';
import {BsCameraFill} from 'react-icons/bs';
import {FaRegClock} from 'react-icons/fa';
import {FaRegCalendarAlt} from 'react-icons/fa';


const Post = () => {
    return (
            <>
                <div className='card rounded bgPost-Style'>
                    <div className='card-body '>
                        <h4 className='text-warning text-center mb-4 mx-auto'>پست جدید</h4>
                        <ul className='text-center py-3 mx-auto'>
                            <li className='list-inline-item text-center mx-auto'>
                                <div>
                                    <button className='text-danger px-2 border-0 bg-transparent'>{<MdLocationOn className='Post-Style'/>}</button>
                                    <span className='h6 text-light'>موقعیت</span>
                                </div>
                            </li>
                            <li className='list-inline-item mx-auto text-center '>
                                <div>
                                    <button className='text-success px-2 border-0 bg-transparent'>{<BiEditAlt className='Post-Style'/>}</button>
                                    <span className='h6 text-light'>وضعیت</span>
                                </div>
                            </li>
                            <li className='list-inline-item text-center mx-auto'>
                                <div>
                                    <button className='text-info px-2 border-0 bg-transparent'>{<BsCameraFill className='Post-Style'/>}</button>
                                    <span className='h6 text-light'>تصویر</span>
                                </div>
                            </li>
                        </ul>
                        <form>
                            <div>
                                <input type='text' className=' form-control py-2 mb-3' placeholder='متنی وارد کنید ...'/>
                                <button className=' badge w-100 bg bg-info py-2 mb-4 mt-2'>ارسال</button>
                            </div>
                        </form>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='card bgPost-Style'>
                                    <i className='text-warning d-block py-3 m-auto'>{<FaRegCalendarAlt style={{width:'65px',height:'65px'}}/>}</i>
                                    <div className='card-body'>
                                        <p className='card-text text-center fw-bold h5'>16 اردیبهشت</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='card bgPost-Style'>
                                    <i className='text-warning d-block py-3 m-auto'>{<FaRegClock style={{width:'65px',height:'65px'}}/>}</i>
                                    <div className='card-body'>
                                        <p className='card-text text-center fw-bold h5'>12.40 ظهر</p>
                                    </div>
                                </div>
                            </div>                                            
                        </div>
                    </div>
                </div>            
            </>
    )
}

export default Post
