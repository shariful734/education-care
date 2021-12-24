import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col col-12 col-md-6">
                    <img src={banner} alt="" className="w-100" />
                </div>

                <div className="col col-12 col-md-6">
                    <h1>Welcome to <br />education care</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                    <button type="button" className="btn btn-info px-3">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;