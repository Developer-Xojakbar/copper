/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState }from 'react';
import IconSVG from './IconSVG';

const Nav = () => {
    const [dropdown, setDropdown] = useState("");
    const [hamburger, setMobileDrop] = useState("");

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
            <div className="mobile__nav_banner">
                <p className="mobile__nav_banner-text">Meet your simple, intuitive CRM.</p>
                <a className="mobile__nav_banner-link">Try Free</a>
            </div>
            <div className="nav container">
                <div className="nav__container">
                    <div className="nav__container__logo">
                        <a href="#">
                            <IconSVG className="copper_logo" iconName="icon-copper_logo" />
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
            <div className={"mobile__nav " + (hamburger === "active" && dropdown !== "" ? "col" : "")}>
                <a className="mobile__nav-logo" href="#"><IconSVG className="" iconName="icon-copper_logo" /></a>
                <div className="mobile__nav-arrow" onClick={() => {setDropdown("");}}><IconSVG className="arrow" iconName="icon-arrow_left" /></div>
                <div className={"mobile__nav-hamburger " + hamburger}
                    onClick={() => {
                        if (hamburger === "") {
                            setMobileDrop("active");
                            document.querySelector("body").classList.add("stop_scrolling");
                        } else {
                            setMobileDrop("");
                            document.querySelector("body").classList.remove("stop_scrolling");
                        }
                        setDropdown("");
                    }}
                >
                    <span className={hamburger === "active" && dropdown !== "" ? "white" : ""}></span>
                    <span className={hamburger === "active" && dropdown !== "" ? "white" : ""}></span>
                    <span className={hamburger === "active" && dropdown !== "" ? "white" : ""}></span>
                    <span className={hamburger === "active" && dropdown !== "" ? "white" : ""}></span>
                    <span className={hamburger === "active" && dropdown !== "" ? "white" : ""}></span>
                    <span className={hamburger === "active" && dropdown !== "" ? "white" : ""}></span>
                </div>
            </div>
            <div className={"mobile__overlay " + hamburger}>
                <div className="mobile__overlay__menu">
                    <div className="mobile__overlay__menu-why_copper" onClick={() => { handleDropdown("why_copper");}}>
                        <p className="mobile__overlay__menu-why_copper-text">Why Copper</p>
                        <IconSVG className="arrow" iconName="icon-arrow_right" />
                    </div>
                    <div className="mobile__overlay__menu-industry">
                        <p className="mobile__overlay__menu-industry-text" onClick={() => { handleDropdown("industry");}}>Industry</p>
                        <IconSVG className="arrow" iconName="icon-arrow_right" />
                    </div>
                    <div className="mobile__overlay__menu-pricing">
                        <a href="#">Pricing</a>
                    </div>
                    <div className="mobile__overlay__menu-demos">
                        <a href="#">Demos</a>
                    </div>
                    <div className="mobile__overlay__menu-resources" onClick={() => { handleDropdown("resources");}}>
                        <p className="mobile__overlay__menu-resources-text">Resources</p>
                        <IconSVG className="arrow" iconName="icon-arrow_right" />
                    </div>
                    <div className="mobile__overlay__menu__buttons">
                        <a className="mobile__overlay__menu__buttons-try_free" href="#">Try Free</a>
                        <a className="mobile__overlay__menu__buttons-login" href="#">Login</a>
                    </div>
                </div>
                <div className="mobile__overlay__col">
                    <div className={"mobile__overlay__col__why_copper " + (dropdown === "why_copper" ? "active" : "")}>
                        <p className="mobile__overlay__col__why_copper-title">Why Copper</p>
                        <a className="mobile__overlay__col__why_copper-link">Organize Contacts</a>
                        <a className="mobile__overlay__col__why_copper-link">Get Reports</a>
                        <a className="mobile__overlay__col__why_copper-link">Track Deals</a>
                        <a className="mobile__overlay__col__why_copper-link">Automate Tasks</a>
                        <a className="mobile__overlay__col__why_copper-link">Security and Privacy</a>
                    </div>
                    <div className={"mobile__overlay__col__industry " + (dropdown === "industry" ? "active" : "")}>
                        <p className="mobile__overlay__col__industry-title">Industry</p>
                        <a className="mobile__overlay__col__industry-link">Agencies</a>
                        <a className="mobile__overlay__col__industry-link">Consulting</a>
                        <a className="mobile__overlay__col__industry-link">Technology</a>
                        <a className="mobile__overlay__col__industry-link">Real Estate</a>
                        <a className="mobile__overlay__col__industry-link">Corporate Development</a>
                    </div>
                    <div className={"mobile__overlay__col__resources " + (dropdown === "resources" ? "active" : "")}>
                        <p className="mobile__overlay__col__resources-title">Resources</p>
                        <a className="mobile__overlay__col__resources-link">Library</a>
                        <a className="mobile__overlay__col__resources-link">Product Updates</a>
                        <a className="mobile__overlay__col__resources-link">Blog</a>
                        <a className="mobile__overlay__col__resources-link">Developers</a>
                        <a className="mobile__overlay__col__resources-link">Help Center</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;