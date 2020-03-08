/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState }from 'react';
import IconSVG from './IconSVG';

const Nav = () => {
    const [dropdown, setDropdown] = useState("");

    const handleDropdown = (value) => {
        if (dropdown !== value) {
            setDropdown(value);
        } else {
            setDropdown("");
        }
    }

    return (
        <div className="container nav-container">
            <div className="nav-banner">
                <p className="nav-banner__text">Still using your inbox to keep track of customer conversations? There's a better way.</p>
                <a className="nav-banner__link" href="#">See how</a>
            </div>
            <div className="nav container">
                <div className="nav__container">
                    <div className="nav__container__logo">
                        <a href="#">
                            <IconSVG className="" iconName="icon-copper_logo" />
                        </a>
                    </div>
                    <div className="nav__container__links">
                        <p className={`nav__container__links-why_copper ${dropdown === "why_copper" ? "active" : ""}`} onClick={() => handleDropdown("why_copper")}>Why Copper<IconSVG className="icon-carrot" iconName="icon-carrot" /></p>
                        <p className={`nav__container__links-industry ${dropdown === "industry" ? "active" : ""}`} onClick={() => handleDropdown("industry")}>Industry<IconSVG className="icon-carrot" iconName="icon-carrot" /></p>
                        <a className="nav__container__links-pricing" href="#">Pricing</a>
                        <a className="nav__container__links-demos" href="#">Demos</a>
                        <p className={`nav__container__links-resources ${dropdown === "resources" ? "active" : ""}`} onClick={() => handleDropdown("resources")}>Resources<IconSVG className="icon-carrot" iconName="icon-carrot" /></p>
                    </div>
                    <div className="nav__container__utility">
                        <a className="nav__container__utility-try_free">Try Free</a>
                        <a className="nav__container__utility-login">Login</a>
                    </div>
                    <div className={`nav__container__dropdown-why_copper ${dropdown === "why_copper" ? "active" : ""}`}>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Productivity-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Organize Contacts</p>
                                <p className="item__text-gray">From prospects to customers to partners and more, keep all your relationships in one place.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Insights-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Track Deals</p>
                                <p className="item__text-gray">Make sure every deal goes smoothly from its initial stages through to close.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-product-security@2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Security and Privacy</p>
                                <p className="item__text-gray">Learn about how Copper keeps your (and your customers') information safe.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Collaboration-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Get Reports</p>
                                <p className="item__text-gray">See how your business is doing and who your top performers are with custom reports.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-product-implementation@2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Automate Tasks</p>
                                <p className="item__text-gray">Never forget to do something again with recurring tasks and notifications for deadlines and events.</p>
                            </div>
                        </a>
                    </div>
                    <div className={`nav__container__dropdown-industry ${dropdown === "industry" ? "active" : ""}`}>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Media-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Agencies</p>
                                <p className="item__text-gray">Better client relations for advertising and media agencies.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Software-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Technology</p>
                                <p className="item__text-gray">Innovate and scale faster with less crm busy work.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Corp-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Corporate Development</p>
                                <p className="item__text-gray">Track and manage deals in one place with Copper.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/Business-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Consulting</p>
                                <p className="item__text-gray">Manage clients and deals from one central place.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/RealState-2x.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Real Estate</p>
                                <p className="item__text-gray">Real estate professionals manage more listings with Copper.</p>
                            </div>
                        </a>
                    </div>
                    <div className={`nav__container__dropdown-resources ${dropdown === "resources" ? "active" : ""}`}>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-resources-events.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Library</p>
                                <p className="item__text-gray">Books, guides, videos and tools for growing your small business.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-resources-blog.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Blog</p>
                                <p className="item__text-gray">News, stories and latest thinking on sales, marketing and more.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-resources-help.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Help Center</p>
                                <p className="item__text-gray">Browse our knowledge base to find answers.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-resources-updates.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Product Updates</p>
                                <p className="item__text-gray">Get updates on our product, best practices and tips.</p>
                            </div>
                        </a>
                        <a className="item" href="#">
                            <img className="item__icon" src={require("../images/icon-resources-developers.png")} />
                            <div className="item__text">
                                <p className="item__text-black">Developers</p>
                                <p className="item__text-gray">Use our API to integrate Copper with other apps.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;