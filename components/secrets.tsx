import Box from './box';
import Number from './number';

const Secrets = ({p, q, λ}) => {
    return (
        <Box header="Secrets">
            <ul>
                <li><code><strong>Prime number 1 (p)</strong></code>: <Number modifier="p" title="Prime number 1 (p)">{p}</Number></li>
                <li><code><strong>Prime number 2 (q)</strong></code>: <Number modifier="q" title="Prime number 2 (q)">{q}</Number></li>
                <li><code><strong>Lambda (λ)</strong></code>: <Number modifier="lambda" title="Lambda (λ)">{λ}</Number></li>
            </ul>
        </Box>
    );
}

export default Secrets;