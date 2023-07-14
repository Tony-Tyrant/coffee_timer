import React from "react";
import { useLang } from "./Context/LangContext";

export default function Header() {
    const lang = useLang();
    const text = {
        title: {
            en: "4:6 Coffee Brewing System Timer",
            zh: "4：6 咖啡沖煮法計時器"
        },
        about: {
            en:'About 4:6 Brewing Method',
            zh:'關於4：6咖啡沖煮法'
        },
        aboutP1a: {
            en: 'The 4:6 method is a coffer brewing system recipe invented by Tetsu Kasuya ',
            zh: '4：6咖啡沖煮法是由2016年世界咖啡師沖煮大賽冠軍'
        },
        aboutP1Bold: {
            en: 'Tetsu Kasuya',
            zh: '粕谷哲先生'
        },
        aboutP1b: {
            en: ' - Champion of World Brewers Cup 2016. The meaning of "4:6" is to divide the total amount of water poured into first 40% and remaing 60%.',
            zh: '所發明的手沖咖啡沖煮系統。當中的「4」跟「6」指的是沖煮咖啡的總水量的頭40%與尾60%。',
        },
        aboutP2: {
            en: 'The first 40% of water will be controlled by 2 pours. By changing the proportion of this 2 pours, to achieve the adjustment of the sweet and sour flavor of the coffee.',
            zh: '頭40%的水量由第1及第2次注水所控制。透過調整第1及第2次注水的比例，從而控制咖啡的甜感及酸感。'
        },
        aboutP3: {
            en: 'Reduce the first pour for more Sweetness',
            zh: '「減少首次注水水量可增強甜感」'
        },
        aboutP4: {
            en: 'The remainig 60% is for the adjustment of the strength and after taste of the coffee. It is achieved by controlling the number of pour.',
            zh: '至於尾60%的水量則是用以控制咖啡的濃度及風味。方法是改變這部份的注水次數。'
        },
        aboutP5: {
            en: '"More pours result in bitterer and stronger after taste."',
            zh: '「注水次數愈多，濃度及風味的愈強」'
        },
        aboutP6: {
            en: 'The core of this brewing system is the same interval for each pour. This timer can help you easlier apply the 4:6 method and make a good cup of coffee. Let\'s try!',
            zh: '這個沖煮法的核心在於每次注水的間距都是均等的。本計時器可幫助你輕鬆實踐4:6沖煮法從而沖出一杯「好啡」。'
        }
    }
    
    return (
        <div>
            <div 
                className="pt-5 pb-3 mb-4 mx-0" 
                id="banner">
                <h1 
                    className="mx-5 mt-5 mb-3 pb-2 bg-warning-subtle text-warning-emphasis text-center" 
                    >
                    {text.title[lang]}
                </h1>
            </div>

            <div className="d-flex align-items-center flex-column">
                <button 
                    className="mx-3 my-2 p-2 border-2 toggler bg-warning-subtle text-warning-emphasis lead text-center" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#About" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    {text.about[lang]}
                </button>

                <div className="collapse" id="About">
                    <div className="my-1 mx-3">
                        <div className="px-3 text-light">
                            <p>{text.aboutP1a[lang]}<b>{text.aboutP1Bold[lang]}</b>{text.aboutP1b[lang]}</p>
                            <p className="mb-1">{text.aboutP2[lang]}</p>
                            <h5 className="text-center fst-italic fw-light p-2 pb-3">{text.aboutP3[lang]}</h5>
                            <p className="mb-1">{text.aboutP4[lang]}</p>
                            <h5 className="text-center fst-italic fw-light p-2 pb-3">{text.aboutP5[lang]}</h5>
                            <p className="m-0">{text.aboutP6[lang]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}