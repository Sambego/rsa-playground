import Box from './box';
import Number from './number';

const PublicKey = ({p, q, λ, n, e}) => {
    return (
        <Box header="Public Key" >
            <ul>
                <li><code><strong>Modulus (n)</strong></code>: <Number modifier="n" title="Modulus (n)">{n}</Number></li>            
                <li><code><strong>Public exponent (e)</strong></code>: <Number modifier="e" title="Public exponent (e)">{e}</Number></li>
            </ul>
        </Box>
    );
}

export default PublicKey;