import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {RiMessage2Fill} from 'react-icons/ri';
import {FaBell} from 'react-icons/fa';
import {ImExit} from 'react-icons/im';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='row justify-content-around'>      
        <div className='col-4 '>
            <h1 className='h4 mt-2 text-warning'>داشبورد</h1>
        </div>
        <div className='col-6'>
            <form className=' d-none d-md-inline'>     
                <button className='btn btn-light btn-Style ms-1'>{<FaSearch/>}</button>                   
                <input className='text-light input-Style mt-1' type={'text'} ></input>
                {<RiMessage2Fill className='ms-5 ms-md-4 me-5 d-none d-lg-inline text-light img-Style2'/>}
                {<FaBell className='ms-5 me-md-4 d-none d-lg-inline text-light img-Style'/> }
            </form>
        </div>
        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='col-2 text-center'>                   
            {<ImExit  className='mx-atuo mt-2 me-4 text-danger img-Style3'/>}
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" 
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    آیا میخواهید خارج شوید؟
                </div>
                <div className="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">میمانم</button>
                    <a href='#' class="btn btn-danger">خارج میشوم</a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
