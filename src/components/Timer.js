import React, { useState, useEffect } from "react";
import { useFactor } from "./Context/FactorContext";
import { useLang } from "./Context/LangContext";
import { useSelector, useDispatch } from "react-redux";
import { updateCount, resetCount } from "./slice/timerSilce";
import { updateConfirm } from "./slice/customizeSilce";

export default function Timer() {
    const { totalTime, confirmed } = useFactor();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.timer.count);
    const [display, setDisplay] = useState("");
    const [timerRun, setTimerRun] = useState(false);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(true);
    const timeouts = [];
    let interval;

    const lang = useLang();    
    const text = {
        start: {
            en: 'START',
            zh: '開始',
        },
        pause: {
            en: 'PAUSE',
            zh: '暫停',
        },
        reset: {
            en: 'RESET TIMER',
            zh: '重置計時器',
        },
        back:{
            en: 'BACK',
            zh: '返回'
        },
        timer: {
            en: 'Press Start to Start the Timer',
            zh: '按開始計時',
        }
    }

    function clickStart() {
        setStart(true);
        count > 0 ? setPause(false) : setTimerRun(true)
    }

    function clickPause() {
        setPause(true);
        setStart(false);
    }

    function clickReset() {
        dispatch(resetCount());
        setTimerRun(false);
        setStart(false);
        setPause(true);
        console.log(confirmed)
        if (confirmed) {
            setDisplay(`${text.timer[lang]}`);
        }
    }

    function clickBack() {
        dispatch(updateConfirm());
        clickReset();
        window.location.href="#top"
    }

    useEffect(() => {
        if (confirmed) {
            setDisplay(`${text.timer[lang]}`);
        } else {
            setDisplay("");
        }
    }, [confirmed, lang])

    /* Countdown before start and resetting the timer */
    useEffect(() => {
        if (timerRun) {
            setDisplay("READY");
            timeouts.push(setTimeout(() => setDisplay('3'), 1000));
            timeouts.push(setTimeout(() => setDisplay('2'), 2000));
            timeouts.push(setTimeout(() => setDisplay('1'), 3000));
            timeouts.push(setTimeout(() => setDisplay('START'), 4000));
            timeouts.push(setTimeout(() => setPause(false), 4500));
        }
        return () => {
            for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            clearInterval(interval);
        }
    }, [timerRun])

    /* starting and pausing the timer */
    useEffect(() => {
        if (timerRun) {
            if (!pause) {
                setDisplay(`${count}s`);
                interval = setInterval(() => {
                    dispatch(updateCount());
                }, 1000)
            }
        }
        return () => {
            clearInterval(interval);
        }
    }, [count, pause, timerRun])

    /* stopping the timer when finish*/
    useEffect(() => {
        if (display === `${totalTime}s`) {
            setDisplay("FINISH")
            setPause(true);
        }
    }, [display])

    return (
        <div className="border border-2 border-warning-subtle p-3 my-md-4 mb-5 w-100 d-flex flex-column">
            <div className="d-flex justify-content-center">
                <button
                    type="button"
                    onClick={clickStart}
                    disabled={confirmed && !start && count < totalTime? 0 : 1}>
                    {text.start[lang]}
                </button>
                <button
                    type="button"
                    onClick={clickPause}
                    disabled={!pause ? 0 : 1}>
                    {text.pause[lang]}
                </button>
                <button
                    type="button"
                    onClick={clickReset}
                    disabled={confirmed ? 0 : 1}>
                    {text.reset[lang]}
                </button>
                <button
                    type="button"
                    onClick={clickBack}
                    disabled={confirmed ? 0 : 1}>
                    {text.back[lang]}
                </button>
            </div>
            <div className="d-flex justify-content-center p-3">
                <h3 id="display">{display}</h3>
            </div>
        </div>
    )
}

