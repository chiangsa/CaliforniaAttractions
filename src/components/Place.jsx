import React from "react";

const Place = (props) => {

    return (
        <div className="Place">
            <img src={props.image} alt="Example Image" />
            <p>
                <h3>{props.name}</h3>
                <h4>{props.activities}</h4>
            </p>
            <a className="Button" href={props.url} target="_blank">
                <button>Google Maps</button>
            </a>
            <p></p>


        </div>
    )
}

export default Place;