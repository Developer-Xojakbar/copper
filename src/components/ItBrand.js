import React from 'react';

const ItBrand = () => {
    return (
        <div className="container it_brand-container">
            <div className="it_brand">
                <div className="it_brand__col">
                    <div className="it_brand__col__context">
                        <p className="it_brand__col__context-pre">Recommended by Google</p>
                        <div className="it_brand__col__context__col">
                            <h2 className="it_brand__col__context__col-h">Designed for the way you work.</h2>
                            <p className="it_brand__col__context__col-text-1">˝We finally have a one stop shop for managing all of our relationships that integrates seamlessly with G Suite.˝</p>
                            <p className="it_brand__col__context__col-text-2">GABE ESTRADA<br />CEO, itBrand</p>
                            <img className="it_brand__col__context__col-brend" src={require("../images/logo-itbrand@2x.png")} alt={"brend"} />
                        </div>
                    </div>
                    <div className="it_brand__col-image">
                        <img src={require("../images/IMG_06_designed-sienna@2x.png")} alt="Hero_Women" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItBrand;