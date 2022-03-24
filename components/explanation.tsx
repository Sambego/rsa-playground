import style from '../styles/Main.module.css';

const Explanation = () => {
    return (
        <div className={style.columns}>
            <div className={style.main}>
                <h2>Here's how RSA works</h2>
                <h3><span className={style.chapter}>1</span> Generate the public and private keys</h3>
                <Secrets p={rsaValues.p} q={rsaValues.q} λ={rsaValues.λ} />
                <PublicKey p={rsaValues.p} q={rsaValues.q} λ={rsaValues.λ} n={rsaValues.n} e={rsaValues.e} />
                <PrivateKey p={rsaValues.p} q={rsaValues.q} λ={rsaValues.λ} n={rsaValues.n} d={rsaValues.d} />
                <ol>
                    <li>
                        We generate 2 random, large prime numbers <strong>p</strong> and <strong>p</strong>. We're using numbers with a length of <strong>{rsa.keySize / 2} bits ({rsa.keySize / 2 / 8 } bytes)</strong>, that will combine to a <strong>key-size of <select onChange={handleUpdateKeySize} className={style.select} value={keySize}>{KEY_SIZES.map(size => <option key={`size_${size}`} value={size} >{size * 8} bits ({size} bytes)</option>)}</select></strong>. These prime numbers <strong>stay secret</strong> and are only used to generate the public and private keys.
                        <ul>
                            <li>The first prime number  <strong>(p)</strong> is <NumberComponent modifier="p" title="Prime number 1 (p)">{rsaValues?.p}</NumberComponent></li>
                            <li>The second prime number  <strong>(q)</strong> is <NumberComponent modifier="q" title="Prime number 2 (q)">{rsaValues?.q}</NumberComponent></li>
                        </ul>
                    </li>
                    <li>Based on these 2 prime numbers to calcuate a <strong>lambda value (λ)</strong>.
                        <ul>
                            <li>The lambda <strong>(λ)</strong> is the  <strong>least common multiple of our 2 prime numbers, with 1 subtracted.</strong></li>
                            <li>Just like our prime number, we keep this value <strong>secret</strong>.</li>
                        </ul>
                        <Box header="lcm(p -1, q -1) = λ"><strong>lcm(</strong><NumberComponent length={10} end modifier="p" title="Prime number 1 (p)">{rsaValues.p}</NumberComponent><strong> - 1, </strong><NumberComponent length={10} end modifier="q" title="Prime number 2 (q)">{rsaValues.q}</NumberComponent><strong> -1) = </strong><NumberComponent end modifier="lambda" title="Lambda (λ)">{rsaValues.λ}</NumberComponent></Box>
                    </li>
                    <li>
                        Once we've calculated all secret values, we can generate the values for our public and private keys. Once again, we can user the 2 prime numbers to calcuate the <strong>modulus (n)</strong>.
                        <ul>
                            <li>This value is calculated by multiplying the <strong>first prime number (p)</strong> by the <strong>second prime number (q)</strong>.</li>
                            <li>The modulus is used for both the <strong>public and private key</strong>.</li>
                        </ul>
                        <Box header="p * q = n"><NumberComponent length={10} end modifier="p" title="Prime number 1 (p)">{rsaValues.p}</NumberComponent> <strong>*</strong> <NumberComponent length={10} end modifier="q" title="Prime number 2 (q)">{rsaValues.q}</NumberComponent> <strong>=</strong> <NumberComponent end modifier="n"  title="Modulus (n)">{rsaValues.n}</NumberComponent></Box>
                    </li>
                    <li>
                        The public key also contains a <strong>public exponent (e)</strong>. To calculate the <strong>public exponent</strong>, we need a smaller, co-prime of our lambda.
                        <ul>
                            <li>The public exponent needs to be <strong>bigger than 1</strong>.</li>
                            <li>It needs to be <strong>smaller than the lambda (λ)</strong>.</li>
                            <li>The <strong>greates common divider</strong> of our public exponent <strong>and our lambda (λ) should be 1</strong>.</li>
                            <li>Our newly calculated public exponent and our lambda (λ) should be <strong>coprime numbers</strong>.</li>
                        </ul>
                        <Box header="1 < e < λ AND gcd(e, λ) = 1">
                            &nbsp;&nbsp;<strong>e = randomPrime() = </strong><NumberComponent end modifier="e"  title="Public exponent (e)">{rsaValues.e}</NumberComponent><br/>
                            &nbsp;&nbsp;<strong>1 &lt; </strong><NumberComponent length={10} end modifier="e"  title="Public exponent (e)">{rsaValues.e}</NumberComponent> &lt; <NumberComponent length={10} end modifier="lambda" title="Lambda (λ)">{rsaValues.λ}</NumberComponent> <strong>AND gcd(</strong><NumberComponent length={10} end modifier="e"  title="Public exponent (e)">{rsaValues.e}</NumberComponent>, <NumberComponent length={10} end modifier="lambda" title="Lambda (λ)">{rsaValues.λ}</NumberComponent>)<strong> = 1</strong><br/>
                        </Box>
                    </li>
                    <li>
                        The private key also contains a <strong>private exponent (d)</strong>. We can determine this <strong>private exponent</strong> by finding the  <strong>modular multiplicative inverse of our public exponent (e) and the lambda (λ)</strong>.
                        <Box header={<>e<sup>-1</sup> (mod λ) = d</>}>
                            <NumberComponent end modifier="e"  title="Public exponent (e)">{rsaValues.e}</NumberComponent><strong><sup>-1</sup> (mod </strong><NumberComponent length={10} end modifier="lambda" title="Lambda (λ)">{rsaValues.λ}</NumberComponent><strong>) = </strong><NumberComponent end modifier="d" title="Private exponent (d)">{rsaValues.d}</NumberComponent>
                        </Box>
                    </li>
                </ol>

                <h3><span className={style.chapter}>2</span> We can encrypt a message using our public key</h3>
                <ol>
                    <li>Encrypting a <strong>message (m)</strong> will make use of a <strong>mathematical algorithm</strong> in combination with the <strong>public key</strong> information we determined earlier. In order to do these calculations, we need to <strong>convert our message (m) to an integer</strong>.</li>
                    <li>
                        Once we have the message (m) as an integer, we can find the <strong>Modular exponentiation of our message (m), raised to the power of our public exponent (e), divided by our modulus (n)</strong>.
                        <Box header={<>m<sup>e</sup> (mod n) = cipher (c)</>}>
                            {!message 
                                ? 'Please enter a message to encrypt on the top of the page...' 
                                : <><NumberComponent end modifier="m"  title="Message (m)">{originalMessage.number?.toString()}</NumberComponent><strong><sup><NumberComponent length={10} end modifier="e"  title="Public exponent (e)">{rsaValues.e}</NumberComponent></sup> (mod </strong><NumberComponent length={10} end modifier="n"  title="Modulus (n)">{rsaValues.n}</NumberComponent><strong>) = </strong><NumberComponent end modifier="c"  title="Cipher (c)">{cipher.number?.toString()}</NumberComponent></>
                            }
                        </Box>
                    </li>
                </ol>
                
                <h3><span className={style.chapter}>3</span> Decrypting a message can be done by leveraging our private key</h3>
                <ol>
                    <li>We will have to convert our <strong>cipher (c)</strong> to a number again, if it's transmitted in another format</li>
                    <li>
                        To decrypt a <strong>cipher (c)</strong> we need to find the <strong>Modular exponentiation of our cipher (c), raised to the power of our private exponent (d), divided by our modulus (n)</strong>.
                        <Box header={<>c<sup>d</sup> (mod n) = message (m)</>} >
                            {!decryptedCipher.number 
                                ? 'Please enter a message to encrypt on the top of the page...' 
                                : <><NumberComponent end modifier="c"  title="Cipher (c)">{decryptedCipher.number?.toString()}</NumberComponent><strong><sup><NumberComponent length={10} end modifier="e"  title="Public exponent (e)">{rsaValues.e}</NumberComponent></sup> (mod </strong><NumberComponent length={10} end modifier="n"  title="Modulus (n)">{rsaValues.n}</NumberComponent><strong>) = </strong><NumberComponent end modifier="c"  title="Cipher (c)">{cipher.number?.toString()}</NumberComponent></>}
                        </Box>
                    </li>
                    <li>The output (m) of the decryption algorithm is going to be an <strong>integer</strong>. The last task left to do is <strong>convert this integer to binary so we can convert it back to an ASCII string</strong>.
                        <Box>
                            {!decryptedCipher.number 
                                ? 'Please enter a message to encrypt on the top of the page...' 
                                : <><strong>binToAscii(intToBin(</strong><NumberComponent end modifier="c"  title="Cipher (c)">{decryptedCipher?.number?.toString()}</NumberComponent><strong>)</strong><sup>*</sup></>
                            }
                        </Box>
                        <span className={style.note}><sup>*</sup>Pseudo-code</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Explanation;