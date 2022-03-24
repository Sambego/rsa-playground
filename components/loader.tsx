import React, {useEffect, useState} from 'react';
import style from '../styles/Loader.module.css';

const Loader = () => {
    const [dots, setDots] = useState('.');
    useEffect(() => {
        const interval = setInterval(() => {
            if (dots !== '...') {
                setDots(`${dots}.`)
            } else {
                setDots('.')
            }
        }, 1000);

        return () => clearInterval(interval);
      }, [dots]);
    return <div className={style.loader}>Crunching the numbers{dots}</div>
}

export default Loader;