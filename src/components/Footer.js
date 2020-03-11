/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import IconSVG from './IconSVG';

const Footer = () => {

    const Links = ({ h_text , link}) => {
        return (
            <div className="footer__social__items__item">
                <p className="footer__social__items__item-h">{h_text}</p>
                {link.map((text) => {
                    return (
                        <a className="footer__social__items__item-link" href="#">{text}</a>
                    );
                })}
            </div>
        );
    };
    
    return (
        <div className="container footer-container">
            <div className="footer">
                <div className="footer__company">
                    <div className="footer__company__context">
                        <a className="footer__company__context-link" href="#">Company</a>
                        <a className="footer__company__context-link" href="#">News</a>
                        <a className="footer__company__context-link" href="#">Pricing</a>
                        <a className="footer__company__context-link" href="#">Careers</a>
                        <a className="footer__company__context-link" href="#">Contact</a>
                        <p className="footer__company__context-address">301 Howard St. #600<br />San Francisco, CA 94105</p>
                    </div>
                    <div className="footer__company__icons">
                        <a className="footer__company__icons-link" href="#"><IconSVG className="icon-facebook" iconName="icon-facebook" /></a>
                        <a className="footer__company__icons-link" href="#"><IconSVG className="icon-twitter" iconName="icon-twitter" /></a>
                        <a className="footer__company__icons-link" href="#"><IconSVG className="icon-linkedin" iconName="icon-linkedin" /></a>
                        <a className="footer__company__icons-link" href="#"><IconSVG className="icon-instagram" iconName="icon-instagram" /></a>
                        <a className="footer__company__icons-link" href="#"><IconSVG className="icon-you_tube" iconName="icon-you_tube" /></a>
                    </div>
                </div>
                <div className="footer__social">
                    <div className="footer__social__items">
                        <Links h_text={"Why Copper"} 
                        link={[
                            "Organize contacts", 
                            "Track leads & deals",
                            "Manage projects",
                            "Build pipelines",
                            "Track emails & tasks",
                            "Reporting & Insights",
                            "CRM on the go",
                            "See all features"
                        ]} />
                        <Links h_text={"Solutions"} 
                        link={[
                            "Agency CRM", 
                            "Technology CRM",
                            "Consulting CRM",
                            "Real Estate CRM",
                            "Small Businesses",
                            "Mid-Market",
                            "Enterprise"
                        ]} />
                        <Links h_text={"CRM for G Suite"} 
                        link={[
                            "G Suite CRM", 
                            "Gmail CRM",
                            "Google Sheets CRM",
                            "Official G Suite Partner",
                            "Chrome Store App",
                            "Android Mobile App"
                        ]} />
                        <Links h_text={"CRM Comparisons"} 
                        link={[
                            "Zoho Alternative",
                            "Pipedrive Alternative",
                            "Insightly Alternative",
                            "Zendesk Sell Alternative",
                            "Salesforce Alternative",
                            "More Comparisons"
                        ]} />
                        <Links h_text={"Integrations"} 
                        link={[
                            "Slack",
                            "Zendesk",
                            "HubSpot",
                            "QuickBooks",
                            "Xero",
                            "Docusign",
                            "See all integrations"
                        ]} />
                        <Links h_text={"Learn"} 
                        link={[
                            "Blog",
                            "Webinars",
                            "Help Center",
                            "Business Tools",
                            "Community"
                        ]} />
                        <Links h_text={"Contact"} 
                        link={[
                            "Talk to Support",
                            "Talk to Sales",
                            "Become a Partner!"
                        ]} />
                    </div>
                    <div className="footer__social__created">
                        <p className="footer__social__created-text-1">Copper is a trademark of Copper CRM, Inc., registered in the U.S. and in other countries.</p>
                        <p className="footer__social__created-text-2">Copper, Inc. © 2020</p>
                        <a className="footer__social__created-link">Privacy</a>
                        <a className="footer__social__created-link">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;