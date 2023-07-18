import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import FactorProvider from './Context/FactorContext';
import { useParams } from 'react-router-dom';

export default function Root() {
    const navigate = useNavigate();
    const { lang } = useParams();
    useEffect(() => {
        if (!lang) {
            navigate("/en");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <FactorProvider>
            <Outlet />
        </FactorProvider>
    )
}