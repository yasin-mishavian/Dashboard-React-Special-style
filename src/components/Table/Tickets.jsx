import React from "react";

const Tickets = () => {
  return (
    <>
        <div id="carouselExampledark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="0" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <table className="table text-white ">
                        <thead>
                        <tr className="bg-dark">
                            <th>#</th>
                            <th>نام</th>
                            <th>تاریخ</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>محسن</td>
                            <td>۱ شهریور</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>محمد</td>
                            <td>۷ مرداد</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>علی</td>
                            <td>۱۶ اردیبهشت</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>فاطمه</td>
                            <td>۱۷ آذر</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>حسین</td>
                            <td>۱۲ خرداد</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td colSpan="2">Admin</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <table className="table text-white">
                        <thead>
                        <tr className="bg-dark ">
                            <th>#</th>
                            <th>نام</th>
                            <th>تاریخ</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>7</td>
                            <td>ستار</td>
                            <td>۱۲ خرداد</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>محمد</td>
                            <td>۱۷ آذر</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>علی</td>
                            <td>۱ شهریور</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>فاطمه</td>
                            <td>۱۶ اردیبهشت</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>حسین</td>
                            <td>۱۲ خرداد</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td colSpan="2">Admin</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="carousel-item">
                    <table className="table text-white">
                        <thead>
                        <tr className="bg-dark">
                            <th>#</th>
                            <th>نام</th>
                            <th>تاریخ</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>13</td>
                            <td>یاسین</td>
                            <td>۱ شهریور</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>محمد</td>
                            <td>۱۶ اردیبهشت</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>علی</td>
                            <td>۱۲ خرداد</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>فاطمه</td>
                            <td>۱۲ خرداد</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>حسین</td>
                            <td>۱۷ آذر</td>
                            <td>
                            <button className="badge w-50 py-2 btn btn-info ">پاسخ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td colSpan="2">Admin</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampledark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampledark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>            
    </>
  );
};

export default Tickets;
