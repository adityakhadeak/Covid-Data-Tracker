import React from "react"
import './Covidstate.css'
export default function Coviddata(Props) {
    return (
        <div className="container mt-3 mb-3">
            <div className="card mb-3 cardst">
                <div className="card-body">
                    <h3 className="card-title main-heading cardtp">{Props.title}</h3>
                    <hr />

                    <h5 className="card-title data orangec ">Total Confirmed: {Props.totalconfirmed}</h5>
                    <hr />
                    <h5 className="card-title data greenc ">Discharged: {Props.discharge}</h5>
                    <hr />
                    <h5 className="card-title data redc ">Deaths: {Props.total}</h5>
                </div>
            </div>
        </div>
    )
}