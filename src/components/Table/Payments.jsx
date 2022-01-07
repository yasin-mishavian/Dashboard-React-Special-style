import React from 'react'
import {FaStar} from 'react-icons/fa';

const Payments = () => {
    return (
        <>
            <div id="carouselExamplewhite" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExamplewhite" data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExamplewhite" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExamplewhite" data-bs-slide-to="0" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>مبلغ</th>                                    
                            <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>یاسین</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-primary'>{<FaStar/>}</span>
                            </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>محمد</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-success'>پرداخت شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>علی</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-danger'>رد شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>فاطمه</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-success'>پرداخت شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>حسین</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-warning'>در انتظار</span>
                            </td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td colSpan="2">Admin</td>
                            <td>                                       
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <table className="table table-dark table-striped">
                    <thead>
                            <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>مبلغ</th>                                    
                            <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>7</td>
                            <td>یاسین</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-primary'>{<FaStar/>}</span>
                            </td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>محمد</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-success'>پرداخت شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>علی</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-danger'>رد شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>10</td>
                            <td>فاطمه</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-success'>پرداخت شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>11</td>
                            <td>حسین</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-warning'>در انتظار</span>
                            </td>
                            </tr>
                            <tr>
                            <td>12</td>
                            <td colSpan="2">Admin</td>
                            <td>                                       
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="carousel-item">
                    <table className="table table-dark table-striped">
                    <thead>
                            <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>مبلغ</th>                                    
                            <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>13</td>
                            <td>یاسین</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-primary'>{<FaStar/>}</span>
                            </td>
                            </tr>
                            <tr>
                            <td>14</td>
                            <td>محمد</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-success'>پرداخت شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>15</td>
                            <td>علی</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-danger'>رد شده</span></td>
                            </tr>
                            <tr>
                            <td>16</td>
                            <td>فاطمه</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-success'>پرداخت شده</span>
                            </td>
                            </tr>
                            <tr>
                            <td>17</td>
                            <td>حسین</td>
                            <td>۵ میلیون</td>
                            <td>
                                <span className='badge w-50 py-2 btn btn-warning'>در انتظار</span>
                            </td>
                            </tr>
                            <tr>
                            <td>18</td>
                            <td colSpan="2">Admin</td>
                            <td>                                        
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplewhite" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplewhite" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>            
        </>
    )
}

export default Payments
