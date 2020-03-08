/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Inbox = () => {
    return (
        <div className="container inbox-container">
            <div className="inbox">
                <div className="inbox__top">
                    <p className="inbox__top-text">Loved by 10,000+ successful small businesses worldwide</p>
                    <div className="inbox__top-brends">
                        <img src={require("../images/logo_swell.png")} alt="logo" />
                        <img src={require("../images/logo_jenis.png")} alt="logo" />
                        <img src={require("../images/logo_wag.png")} alt="logo" />
                        <img src={require("../images/logo_mailchimp.png")} alt="logo" />
                        <img src={require("../images/logo_ideo.png")} alt="logo" />
                    </div>
                </div>
                <img className="inbox__image" src={require("../images/Home_variant_B_UI_01.png")} alt="Home_variant" />
                <div className="inbox__context">
                    <h2 className="inbox__context-h">Never leave your inbox.</h2>
                    <p className="inbox__context-text">Add leads, update deals, look up past interactions, create Google Calendar events, and follow up on tasks—right from your Gmail inbox.</p>
                    <div className="inbox__context__buttons">
                        <a className="inbox__context__buttons-try_free" href="#">Try Free</a>
                        <a className="inbox__context__buttons-request_demo" href="#">Request Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox;