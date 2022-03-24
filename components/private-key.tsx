import Box from './box';
import Number from './number';

const PrivateKey = ({p, q, λ, n, d}) => {
    return (
        <Box header="Private Key">
             <ul>
                <li><code><strong>Modulus (n)</strong></code>: <Number modifier="n" title="Modulus (n)">{n}</Number></li>            
                <li><code><strong>Private exponent (d)</strong></code>: <Number modifier="d" title="Private exponent (d)">{d}</Number></li>
            </ul>
        </Box>
    );
}

export default PrivateKey;