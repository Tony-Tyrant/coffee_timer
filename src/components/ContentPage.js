import React from "react";
import { Link } from 'react-router-dom';
import { useLang } from "./context/LangContext";
import Header from "./Header";
import Customize from "./Customize";
import Summary from "./Summary";
import Timer from "./Timer";

export default function ContentPage() {
    const lang = useLang();

    return (
        <div className="container-fluid h-auto">

            <div className="row h-25" id="top">
                {/* language selector */}
                <ul className="nav nav-underline justify-content-end align-items-center m-1">
                    <li className="nav-item">
                        <Link to="/en" className={lang === 'en' ? "nav-link active" : "nav-link"}>EN</Link>
                    </li>
                    <li>/</li>
                    <li className="nav-item">
                        <Link to="/zh" className={lang === 'zh' ? "nav-link active" : "nav-link"}>中文</Link>
                    </li>
                </ul>
                {/* The header */}
                <div className='col p-0' id="header">
                    <Header />
                </div>
            </div>
            {/* The input form */}
            <div className="row my-3 h-50">
                <div className='col' id="customize">
                    <Customize />
                </div>
            </div>
            {/* The timer */}
            <div className="row mx-2 h-50">
                <div className='col-md-6 col-12 m-2' id="summary">
                    <Summary />
                </div>
                <div className='col-md-5 col-12 p-0 m-2' id="timer">
                    <Timer />
                </div>
            </div>
        </div>
    );
}