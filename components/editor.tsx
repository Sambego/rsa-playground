import react, { useState, useEffect } from 'react';
import { hexToBase64 } from '../services/helpers';
import style from '../styles/Editor.module.css';

const Editor = ({value, title, busy}) => {
    const [encoding, setEncoding] = useState('hex');
    const [content, setContent] = useState('');
    
    const encodeContent = (encoding, value) => {
        switch (encoding) {
            case 'hex': return value.hex?.match(/.{1,2}/g).join(' ');
            case 'ascii':  return value.text;
            case 'base64': return hexToBase64(value.hex);
            default: return value.number?.toString();
        }
    };

    useEffect(() => {
        setContent(encodeContent(encoding, value))
    }, [encoding, value])

    return (
        <div className={style.container}>
            <header className={style.header}>
                <h4>{title}</h4>
                <nav>
                    <button className={`${style.button} ${encoding === 'int' ? style.active : ''}`} onClick={() => setEncoding('int')}>Integer</button>
                    <button className={`${style.button} ${encoding === 'hex' ? style.active : ''}`} onClick={() => setEncoding('hex')}>Hex</button>
                    <button className={`${style.button} ${encoding === 'ascii' ? style.active : ''}`} onClick={() => setEncoding('ascii')}>ASCII</button>
                    <button className={`${style.button} ${encoding === 'base64' ? style.active : ''}`} onClick={() => setEncoding('base64')}>Base64</button>
                </nav>
            </header>

            <textarea disabled={true} placeholder="The encrypted message will appear here..." rows="10" className={style.editor} value={busy ? 'Encrypting your message...' : value.number === BigInt(0) ? 'Please enter a message to encrypt...' : content} />
        </div>
    );
}

export default Editor;