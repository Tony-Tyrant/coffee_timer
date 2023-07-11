import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const FactorContext = createContext();
const roundFive = (n) => {
    return Math.round(n/5) * 5;
}

export default function FactorProvider({ children }) {
    /* fetch customized data from Redux store */
    const volume = useSelector(state => state.customize.volume);
    const powderRatio = useSelector(state => state.customize.powderRatio);
    const firstPour = useSelector(state => state.customize.firstPour);
    const pour = useSelector(state => state.customize.pour);
    const totalTime = useSelector(state => state.customize.totalTime);
    const confirmed = useSelector(state => state.customize.confirmed);
    
    /* calculate the amount of coffee powder and water needed */
    const powder = Math.round(volume / (powderRatio - 2));
    const water = roundFive(volume + ( powder * 2 ));

    /* Calculate the options for the first pour */
    const a = roundFive(powder);
    const e = roundFive(water*0.2);
    const b = roundFive((e-a)/4 + a);
    const c = roundFive(2*(e-a)/4 + a);
    const d = roundFive(3*(e-a)/4 + a);
    const firstPourOptions = [a, b, c, d, e];

    /* Calculate the water amount for each pour */
    /* first 40% of water */
    const secondPour = roundFive(water*0.4)
    /* remaining 60% of water */
    const remainAmount = water - secondPour;
    const eachPour = roundFive(remainAmount / (pour - 2))
    const remainPour = []
    if(pour===3) {
        remainPour.push(remainAmount);
    } else {
        for(let i=1; i<=pour-3; i++) {
            remainPour.push(secondPour + i * eachPour);
        }
        remainPour.push(water);
    }
    
    /* Calculate the time for each pour */
    const interval = Math.round(totalTime / pour);
    const intervalMap = [0];
    for(let i=1; i<pour-1; i++) {
        intervalMap.push(i * interval);
    }
    intervalMap.push(totalTime);
    
    // console.log(firstPour);
    // console.log(secondPour);
    // console.log(remainPour);
    // console.log(intervalMap);

    return (
        <FactorContext.Provider value={{
            volume: volume,
            powderRatio: powderRatio,
            powder: powder,
            water: water,
            pour: pour,
            firstPourOptions: firstPourOptions,
            firstPour: firstPour,
            secondPour: secondPour,
            remainPour: remainPour,
            totalTime: totalTime,
            intervalMap: intervalMap,
            confirmed: confirmed
        }}>
            { children }
        </FactorContext.Provider>
    )
}

export const useFactor = () => useContext(FactorContext);