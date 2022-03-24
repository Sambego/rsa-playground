import Box from './box';
import style from '../styles/legend.module.css';

const Legend = () => {
    return (
        <div className={style.legend}>
            <Box header="Legend">
                <ul>
                    <li className={`${style.item} ${style.p}`}>Prime number 1 (p)</li>
                    <li className={`${style.item} ${style.q}`}>Prime number 2 (q)</li>
                    <li className={`${style.item} ${style.lambda}`}>Lambda (λ)</li>
                    <li className={`${style.item} ${style.n}`}>Modulus (n)</li>
                    <li className={`${style.item} ${style.e}`}>Public exponent (e)</li>
                    <li className={`${style.item} ${style.d}`}>Private exponent (d)</li>
                    <li className={`${style.item} ${style.m}`}>Message (m)</li>
                    <li className={`${style.item} ${style.c}`}>Cipher (c)</li>
                </ul>
            </Box>
        </div>
    );
};

export default Legend;