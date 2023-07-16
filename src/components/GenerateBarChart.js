import React from "react";
import { useFactor } from "./Context/FactorContext";

export default function GenerateBarChart() {
    const { firstPour, remainPour, water, pour } = useFactor();
    const colorMap = ['#5DADE2', '#17A589', '#52BE80', '#C39BD3', '#CD6155', '#E59866', '#566573'];  
    const remain = remainPour.map((ml, index) => {
        return (
            <h6
                style={{
                    display:"inline-block",
                    left: "10px",
                    width: `${60/(pour-2)}%`,
                    height: "1.5rem",
                    backgroundColor: `${colorMap[index]}`,
                }}
                key={index}>{index+3}</h6>
        )
    })


    return (
        <div className="row p-0 m-0">
            <h6
                style={{
                    display:"inline-block",
                    left: "10px",
                    width: `${firstPour / water * 100}%`,
                    height: "1.5rem",
                    backgroundColor: "#DFFF00",
                }}>1
            </h6>
            <h6
                style={{
                    display:"inline-block",
                    left: "10px",
                    width: `${40 - (firstPour / water * 100)}%`,
                    height: "1.5rem",
                    backgroundColor: "#FFBF00",
                }}>2
            </h6>
            {remain}
        </div>
    )
}

