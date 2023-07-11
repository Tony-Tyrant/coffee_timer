import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LangProvider from './context/LangContext';
import FactorProvider from './context/FactorContext';

export default function Root() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/en");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <LangProvider>
            <FactorProvider>
                <Outlet />
            </FactorProvider>
        </LangProvider>
    )
}