import React from "react";
import { useDispatch } from "react-redux";
import { updateVolume, updatePowderRatio, updatePour, updateFirstPour, updateTotalTime, reset, updateConfirm } from './slice/customizeSilce'
import { useLang } from "./Context/LangContext";
import { useFactor } from "./Context/FactorContext";


export default function Customize() {
    const { volume, powderRatio, pour, firstPour, firstPourOptions, totalTime, confirmed } = useFactor();
    const dispatch = useDispatch();

    const lang = useLang();
    const text = {
        volume1: {
            en: 'Amount of Coffee:',
            zh: '咖啡份量：',
        },
        volume2: {
            en: '(min. 200ml ~ max. 1000ml)',
            zh: '(min. 200ml ~ max. 1000ml)',
        },
        powderRatio1: {
            en: 'Powder to Water Ratio:',
            zh: '粉水比：'
        },
        powderRatio2: {
            en: '(Recommend 1:13[sweeter] ~ 1:16[bitterer] | Default 1:15)',
            zh: '(建議 1:13[偏甜] ~ 1:16[偏苦] | 預設為1:15)',
        },
        firstPour1: {
            en: 'Water for the First Pour:',
            zh: '首次注水量',
        },
        firstPour2: {
            en: '<- sweeter ---------------- sourer ->',
            zh: '<- 偏甜 ------------------------ 偏酸 ->',
        },
        firstPour3: {
            en: `(Default ${firstPourOptions[2]}g)`,
            zh: `(預設為${firstPourOptions[2]}g)`,
        },
        pour1: {
            en: 'Number of Pours:',
            zh: '注水次數：'
        },
        pour2: {
            en: '<- lighter ---------------- stronger ->',
            zh: '<- 偏淡 ------------------------ 偏濃 ->',
        },
        pour3: {
            en: '(Default 5 times)',
            zh: '(預設為5次)',
        },
        totalTime1: {
            en: 'Total Brewing Time:',
            zh: '總沖煮時間',
        },
        totalTime2: {
            en: '(min. 120s ~ max. 300s | Default 150s)',
            zh: '(min. 120s ~ max. 300s | 預設為150秒)',
        },
        confirm: {
            en: 'CONFIRM',
            zh: '確認'
        },
        reset: {
            en: 'RESET',
            zh: '重置'
        }
    }

    function validateForm() {
        if (volume<200 || volume>1000) {
            return 1;
        } else if (totalTime<120 || totalTime>300) {
            return 1;
        } else {
            return 0;
        }
    }

    return (
        <div>
            <form className="mb-4">
                <label htmlFor="volume">{text.volume1[lang]}</label>

                <br className="d-sm-none" />
                <input
                    id="volume"
                    type="number"
                    inputMode="numeric"
                    min="200"
                    max="1000"
                    value={volume===0? "" : volume}
                    onChange={() => dispatch(updateVolume())}
                    className={volume<200 || volume>1000? "mx-2 text-center bg-danger" : "mx-2 text-center"}
                    disabled={confirmed} ></input>
                <span>ml</span>
                <br />
                <label htmlFor="volume">{text.volume2[lang]}</label>
                <hr /><br />

                <label htmlFor="powderRatio">{text.powderRatio1[lang]}</label>
                <br className="d-sm-none" />
                <select 
                    id="powderRatio" 
                    onChange={() => dispatch(updatePowderRatio())} 
                    className="mx-2 text-center"
                    disabled={confirmed}>
                    <option value={10}>1 : 10</option>
                    <option value={11}>1 : 11</option>
                    <option value={12}>1 : 12</option>
                    <option value={13}>1 : 13</option>
                    <option value={14}>1 : 14</option>
                    <option value={15} selected={powderRatio===15? true : false}>1 : 15</option>
                    <option value={16}>1 : 16</option>
                    <option value={17}>1 : 17</option>
                    <option value={18}>1 : 18</option>
                </select>
                <br />
                <label htmlFor="powderRatio">{text.powderRatio2[lang]}</label>
                <hr />

                <label>{text.pour1[lang]}</label>
                <br />
                <label>{text.pour2[lang]}</label>

                <fieldset 
                    className="d-flex justify-content-start" 
                    id='pour' 
                    onChange={() => dispatch(updatePour())}
                    disabled={confirmed}>
                    <div className="px-2 py-2 d-flex">

                        <input type="radio" id="3" value={3} name="pour"></input>
                        <label htmlFor="3">3</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="4" value={4} name="pour"></input>
                        <label htmlFor="4">4</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="5" value={5} name="pour" checked={pour===5? true : false}></input>
                        <label htmlFor="5">5</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="6" value={6} name="pour"></input>
                        <label htmlFor="6">6</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="7" value={7} name="pour"></input>
                        <label htmlFor="7">7</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="8" value={8} name="pour"></input>
                        <label htmlFor="8">8</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="9" value={9} name="pour"></input>
                        <label htmlFor="9">9</label>
                    </div>
                </fieldset>
                <label>{text.pour3[lang]}</label>
                <hr />

                <label>{text.firstPour1[lang]}</label>
                <br />
                <label>{text.firstPour2[lang]}</label>

                <fieldset 
                    className="d-flex justify-content-start" 
                    id='firstPour' 
                    onChange={() => dispatch(updateFirstPour())}
                    disabled={confirmed}>
                    <div className="px-2 py-2 d-flex">

                        <input type="radio" id="1st" value={firstPourOptions[0]} name="firstPour"></input>
                        <label htmlFor="1st">{firstPourOptions[0] + 'g'}</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="2nd" value={firstPourOptions[1]} name="firstPour"></input>
                        <label htmlFor="2nd">{firstPourOptions[1] + 'g'}</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="3rd" value={firstPourOptions[2]} name="firstPour" checked={firstPour===40? true : false}></input>
                        <label htmlFor="3rd">{firstPourOptions[2] + 'g'}</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="4th" value={firstPourOptions[3]} name="firstPour"></input>
                        <label htmlFor="4th">{firstPourOptions[3] + 'g'}</label>
                    </div>
                    <div className="px-2 py-2">
                        <input type="radio" id="5th" value={firstPourOptions[4]} name="firstPour"></input>
                        <label htmlFor="5th">{firstPourOptions[4] + 'g'}</label>
                    </div>
                </fieldset>
                <label>{text.firstPour3[lang]}</label>
                <hr />

                <label htmlFor="totalTime">{text.totalTime1[lang]}</label>
                <br className="d-sm-none" />
                <br className="d-sm-none" />
                <input
                    id="totalTime"
                    type="number"
                    inputMode="numeric"
                    min="120"
                    max="300"
                    value={totalTime===0? "" : totalTime}
                    onChange={() => dispatch(updateTotalTime())}
                    className={totalTime<120 || totalTime>300? "mx-2 text-center bg-danger" : "mx-2 text-center"}
                    disabled={confirmed}>

                </input><span>s</span>
                <br />
                <label htmlFor="totalTime">{text.totalTime2[lang]}</label>

            </form>
            <div className="mt-3">
                <a href="#timer">
                    <button 
                        type="button" 
                        disabled={validateForm() || confirmed}
                        className="mx-2" 
                        onClick={() => dispatch(updateConfirm())}>
                        {text.confirm[lang]}
                    </button>
                </a>
                <button className="mx-2" type="reset" onClick={() => dispatch(reset())}>{text.reset[lang]}</button>
            </div>
        </div>
    )
}