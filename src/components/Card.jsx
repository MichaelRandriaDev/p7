import React from "react";

const Card = ({locationData}) => {
    return (
        <div className="CardContent">
            <div className="CardImg">
                <img src={locationData.cover} alt="Location-Pic"/>
                <div className="CardTitle">
                    <h2>{locationData.title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;