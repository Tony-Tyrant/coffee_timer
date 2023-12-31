import React from "react";
import { useFactor } from "./Context/FactorContext";
import GenerateBarChart from "./GenerateBarChart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Summary() {
    const { intervalMap, firstPour, secondPour, remainPour, water, powder, totalTime, pour } = useFactor()
    //console.log(intervalMap)
    const pourMap = [firstPour, secondPour].concat(remainPour)
    //console.log(pourMap)
    const count = useSelector(state => state.timer.count);

    const { lang } = useParams();
    const text = {
        water: {
            en: 'Total Water Amount',
            zh: '總注水量',
        },
        powder: {
            en: 'Powder Amount',
            zh: '咖啡粉用量',
        },
        time: {
            en: 'Total Brewing Time',
            zh: '總沖煮時間',
        },
        pour: {
            en: 'Number of Pour',
            zh: '注水次數',
        },
        sammary1: {
            en: 's pour ',
            zh: '秒注水',
        },
        sammary2: {
            en: 'g of water.',
            zh: 'g。',
        },
        sammary3: {
            en: 's finish!',
            zh: '秒完成!',
        },
    }

    function showArrow(i) {
        if (i < intervalMap.length - 1) {
            if (count >= intervalMap[i] && count < intervalMap[i + 1]) {
                return false;
            } else {
                return true;
            }
        } else if (i === intervalMap.length - 1) {
            if (count >= intervalMap[i] && count < totalTime) {
                return false;
            } else {
                return true;
            }
        } else if (i === intervalMap.length) {
            if (count >= totalTime) {
                return false;
            } else {
                return true;
            }
        }
    }

    const summary = intervalMap.map((time, index) => {
        return (
            <li key={index}>
                {` = ${time}${text.sammary1[lang]}${pourMap[index]}${text.sammary2[lang]}`}
                <span hidden={showArrow(index)}>
                    <b className="text-info fs-5">{' <--'}</b>
                </span>
            </li>
        );
    })

    return (
        <div>
            <div className="row border border-2 rounded border-warning-subtle bg-warning bg-opacity-50 text-warning-emphasis text-center my-4" >
                <table className="my-2">
                    <thead>
                        <tr>
                            <th>{text.water[lang]}</th>
                            <th>{text.powder[lang]}</th>
                            <th>{text.time[lang]}</th>
                            <th>{text.pour[lang]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{water}g</td>
                            <td>{powder}g</td>
                            <td>{totalTime}s</td>
                            <td>{pour}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row border border-2 rounded border-warning-subtle bg-warning bg-opacity-50 mb-4 p-3">
                <div className="col p-0 m-0">
                    <GenerateBarChart />
                </div>
                <ol className="mx-2 m-0">
                    {summary}
                    <li key={intervalMap.length}>
                        = {totalTime}{text.sammary3[lang]}
                        <span hidden={showArrow(intervalMap.length)}>
                            <b className="text-info fs-5">{' <--'}</b>
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}