import React from "react";

export default function Allcases(Props) {
    return (
        <div className="card" style={{"width": "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{Props.heading}</h5>
                    <p className="card-text">{Props.title}</p>
                </div>
        </div>
    )
}