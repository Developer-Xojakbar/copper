/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const MdBanner = () => {
    return (
        <div className="container md_banner-container">
            <div className="md_banner">
                <img className="md_banner-background" src={require("../images/IMG_02_join-smb-teams@2x.png")} alt="join_teams" />
                <div className="md_banner__context">
                    <h2 className="md_banner__context-h">Join 10,000+ successful small businesses and teams.</h2>
                    <p className="md_banner__context-text">Copper helps businesses grow one relationship at a time.</p>
                    <div className="md_banner__context__buttons">
                        <a className="md_banner__context__buttons-try_free" href="#">Try Free</a>
                        <a className="md_banner__context__buttons-request_demo" href="#">Request Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MdBanner;