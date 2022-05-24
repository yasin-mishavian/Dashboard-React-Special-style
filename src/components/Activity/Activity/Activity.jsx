import React from 'react'
import slide1 from "./../../assets/img/5.jpg";
import slide2 from "./../../assets/img/4.jpg";
import slide3 from "./../../assets/img/7.jpg";
import slide4 from "./../../assets/img/8.jpg";
import './Activity.scss';

const Activity = () => {
    return (
        <>  <h2 className='text-light p-3 mb-3'>فعالیت هایه اخیر</h2>
            <div className="accordion accordion-flush active-Activity" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header " id="flush-headingOne">
                        <button className="accordion-button collapsed activity-Style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                            <img
                                src={slide1}
                                alt=""
                                className="rounded"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h6 className="px-3 fw-bold mt-2 text-primary "> محمد یک گفتگوی جدید ایجاد کرد </h6>
                        </button>   
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse activity-Style text-white" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed activity-Style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                            <img
                                src={slide2}
                                alt=""
                                className="rounded"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h6 className="px-3 fw-bold mt-2 text-primary"> محمد یک گفتگوی جدید ایجاد کرد </h6>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse activity-Style text-white" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed activity-Style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                            <img
                                src={slide3}
                                alt=""
                                className="rounded" 
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h6 className="px-3 fw-bold mt-2 text-primary"> محمد یک گفتگوی جدید ایجاد کرد </h6>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse activity-Style text-white" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingfour">
                        <button className="accordion-button collapsed activity-Style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour">
                            <img
                                src={slide4}
                                alt=""
                                className="rounded"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h6 className="px-3 fw-bold mt-2 text-primary"> محمد یک گفتگوی جدید ایجاد کرد </h6>
                        </button>
                    </h2>   
                    <div id="flush-collapsefour" className="accordion-collapse collapse activity-Style text-white" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>         
        </>
    )
}

export default Activity
