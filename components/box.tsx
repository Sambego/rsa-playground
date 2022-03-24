import  style from '../styles/Box.module.css';

const Box = ({header, children, modifier}) => {
    return (
        <div className={`${style.container} ${modifier ? style[modifier] : ''}`}>
            {header && <header className={style.header}>{header}</header>}
            <div className={style.content}>{children}</div>
        </div>
    )
}

export default Box;