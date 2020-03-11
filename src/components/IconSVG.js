import React from 'react';
import sprite from '../images/sprite.svg';

const IconSVG = ({ iconName, className, style}) => {
    return (
        <svg className={`icon ${className}`} style={{...style}}>
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export default IconSVG;