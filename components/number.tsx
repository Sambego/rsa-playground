import { useState } from 'react';
import { truncate } from '../services/helpers';
import style from '../styles/Number.module.css'

const Number = ({children, modifier, title, length = 40, end = false}) => {
    const [coordinates, setCoordinates] = useState({x: 0, y: 0});
    const handleShowPopover = event => {
        setCoordinates({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <code className={`${style.number} ${modifier ? style[modifier] : ''}`} onMouseMove={handleShowPopover}>
            {truncate(children, length, end)} 
            <span className={style.popover} style={{left: coordinates.x, top: coordinates.y}}>{title && <header className={style.header}>{title}</header>}{children}</span>
        </code>
    );
}

export default Number;