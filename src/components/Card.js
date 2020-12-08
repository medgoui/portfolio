import React from 'react';

const Card = props => {

    return (
        <div className="prj__card" style={{ backgroundColor: props.bgColor }} onClick={props.click}>
            <div className="img__container">
                <img src={props.imgSrc} alt={props.imgSrc} className="img__style" />
            </div>
        </div>
    );
}

export default Card;