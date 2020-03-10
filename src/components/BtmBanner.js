/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const BtmBanner = () => {
    return (
        <div className="container btm_banner">
            <div className="btm_banner-image">
                <img src={require("../images/UI_ipad_final-plea-update-new.jpg")} alt="background_image" />
            </div>
            <div className="btm_banner__col">
                <div className="btm_banner__col__context">
                    <p className="btm_banner__col__context-pre">Goodbye Data Entry</p>
                    <h2 className="btm_banner__col__context-h">Hello Copper.<br />Try it free!</h2>
                    <p className="btm_banner__col__context-text">No credit card required. Start your 14-day free trial today.</p>
                    <div className="btm_banner__col__context__buttons">
                        <a className="btm_banner__col__context__buttons-request_demo" href="#">Request Demo</a>
                        <a className="btm_banner__col__context__buttons-try_free" href="#">Try Free</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BtmBanner;