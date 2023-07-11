import React, { useState, useEffect } from "react";
import { useFactor } from "./context/FactorContext";
import { useSelector, useDispatch } from "react-redux";
import { updateCount, resetCount } from "./slice/timerSilce";
import { updateConfirm } from "./slice/customizeSilce";

export default function Timer() {
    const { totalTime, confirmed } = useFactor();
    //const testTime = 5;
    const dispatch = useDispatch();
    const count = useSelector((state) => state.timer.count);
    const [display, setDisplay] = useState("");
    const [timerRun, setTimerRun] = useState(false);
    const [pause, setPause] = useState(true);
    const timeouts = [];
    let interval;

    function clickReset() {
        setTimerRun(false);
        setPause(true);
        if(confirmed) {
            setDisplay("Press Start to Start the Timer");
        }
    }

    function clickStart() {
        count > 0 ? setPause(false) : setTimerRun(true)
    }

    function clickBack() {
        dispatch(updateConfirm());
        clickReset();
    }
    
    useEffect(() => {
        if(confirmed) {
            setDisplay("Press Start to Start the Timer");
        } else {
            setDisplay("");
        }
    }, [confirmed])

    /* Countdown before start and resetting the timer */
    useEffect(() => {
        if (timerRun) {
            setDisplay("READY");
            timeouts.push( setTimeout(()=>setDisplay('3'), 1000) );
            timeouts.push( setTimeout(()=>setDisplay('2'), 2000) );
            timeouts.push( setTimeout(()=>setDisplay('1'), 3000) );
            timeouts.push( setTimeout(()=>{
                setDisplay('START');
                setPause(false);
            }, 4000) );
        }
        return () => {
            for(let i=0; i<timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            clearInterval(interval);
            dispatch(resetCount());
        }   
    }, [timerRun])

    /* starting and pausing the timer */
    useEffect(() => {
        if (timerRun) {
            if(!pause) {
                interval = setInterval(() => {
                    dispatch(updateCount());
                    setDisplay(`${count}s`);
                }, 1000)
            }
        }
        return () => {
            clearInterval(interval);
        }
    }, [count, pause, timerRun])

    /* stopping the timer when finish*/
    useEffect(() => {
        if(display === `${totalTime}s`) {
            setTimerRun(false);
            setDisplay("FINISH")
            setPause(true);
            dispatch(resetCount());
        } 
    }, [display])

    return (
        <div>
            <button 
                type="button" 
                onClick={clickStart} 
                disabled={confirmed? 0 : 1}>
                start
            </button>
            <button 
                type="button" 
                onClick={()=>setPause(true)} 
                disabled={pause? 1 : 0}>
                Pause
            </button>
            <button 
                type="button" 
                onClick={clickReset}
                disabled={confirmed? 0 : 1}>
                reset timer
            </button>
            <button 
                type="button" 
                onClick={clickBack}
                disabled={confirmed? 0 : 1}>
                back
            </button>
            <h5 id="display">{display}</h5>
        </div>
    )
}

