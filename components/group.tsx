import style from '../styles/Group.module.css';

const Group = ({children}) => {
    return <span className={style.group}>{children}</span>
}

export default Group;