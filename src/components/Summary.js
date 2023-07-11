import React from "react";
import { useFactor } from "./context/FactorContext";
import GenerateBarChart from "./GenerateBarChart";
import { useLang } from "./context/LangContext";
import { useSelector } from "react-redux";

export default function Summary() {
    const lang = useLang();
    const { intervalMap, firstPour, secondPour, remainPour } = useFactor()
    //console.log(intervalMap)
    const pourMap = [firstPour, secondPour].concat(remainPour)
    //console.log(pourMap)
    const count = useSelector(state => state.timer.count);
    
    function showArrow(i) {
        if(count>intervalMap[i] && count<=intervalMap[i+1]) {
            return false;                            
        } else {
            return true;
        }
    }
    
    const summary = intervalMap.map((time, index) => {
        return (
            <li>
                {` = ${time}s pour ${pourMap[index]}g of water`}
                <span hidden={showArrow(index)}>
                    <b>{'<--'}</b>
                </span>
            </li>
        );
    })

    return (
        <div className="row">
            <GenerateBarChart />
            <ol className="mx-2 m-0">
                {summary}
            </ol>
            <span className="p-0 mx-1">finish</span>
        </div>
    )
}