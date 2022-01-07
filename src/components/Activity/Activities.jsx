import React from 'react'
import Activity from './Activity';
import Post from './Post';
import $ from "jquery";

const Activities = () => {


    $(window).scroll(function () {
    const position = $(this).scrollTop();
    if (position >= 300) {
        $(".bgPost-Style").addClass("opacity1");
        $(".active-Activity").addClass("opacity2");
    } else {
        $(".bgPost-Style").removeClass("opacity1");
        $(".active-Activity").removeClass("opacity2");
    }
    });


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

export default Activities
