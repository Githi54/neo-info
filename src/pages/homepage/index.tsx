import 'bulma/css/bulma.css';
import { useEffect } from 'react';
import { getNeoInfo } from '../../data/data-about-neo';

export const HomePage = () => {
    useEffect(() => {
        console.log(getNeoInfo("2023-07-01"));
    }, []);

    return (
        <h1>Hello world!</h1>
    );
};
