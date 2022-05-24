import React from 'react'
import {HiOutlineRefresh} from 'react-icons/hi';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {FaChartLine} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import './Card.scss';

const Card = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-6 col-lg-5 col-xl-5 col-xxl-3 pt-4">            
                <div className="card Card-Style opacity1">
                  <div className='row row-cols-2 align-items-center my-auto'>
                    <i>{<FaChartLine className='Cardimg-Style me-4 text-danger'/>}</i>
                    <div className="card-body">
                      <h4 className="card-title me-2 text-light fw-bold">بازدید</h4>
                      <h3 className="card-text mt-4 me-2 text-light fw-bold">۱۰۰۰۰</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-light fw-bold">به روز رسانی {<HiOutlineRefresh className='fw-bold ref-Style text-warning mx-2'/>}</small>
                  </div>                
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-5 col-xl-5 col-xxl-3 pt-4">
                <div className="card Card-Style opacity2">
                  <div className='row row-cols-2 align-items-center my-auto'>
                    <i>{<FaUserFriends className='Cardimg-Style me-4 text-primary'/>}</i>
                    <div className="card-body">
                      <h4 className="card-title rtl-rtl me-2 text-light fw-bold">کاربران</h4>
                      <h3 className="card-text mt-4 me-2 text-light fw-bold">۵۰۰۰۰</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-light fw-bold">به روز رسانی {<HiOutlineRefresh className='fw-bold ref-Style text-warning mx-2'/>}</small>
                  </div>                
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-5 col-xl-5 col-xxl-3 pt-4">
                <div className="card Card-Style opacity2">
                  <div className='row row-cols-2 align-items-center my-auto'>
                    <i>{<FaRegMoneyBillAlt className='Cardimg-Style me-4 text-success'/>}</i>
                    <div className="card-body">
                      <h4 className="card-title me-2 text-light fw-bold">فروش</h4>
                      <h3 className="card-text mt-4 me-2 text-light fw-bold">۳۶ میلیون</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-light fw-bold">به روز رسانی {<HiOutlineRefresh className='fw-bold ref-Style text-warning mx-2'/>}</small>
                  </div>                
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-5 col-xl-5 col-xxl-3 pt-4">
                <div className="card Card-Style opacity1">
                  <div className='row row-cols-2 align-items-center my-auto'>
                    <i>{<FaShoppingCart className='Cardimg-Style me-4 text-warning'/>}</i>
                    <div className="card-body">
                      <h4 className="card-title me-2 text-light fw-bold">هزینه</h4>
                      <h3 className="card-text mt-4 me-2 text-light fw-bold">۴ میلیون</h3>
                    </div>  
                  </div>  
                  <div className="card-footer rtl-rtl">
                    <small className="text-muted fw-bold">به روز رسانی {<HiOutlineRefresh className='fw-bold ref-Style text-warning mx-2'/>}</small>
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Card
