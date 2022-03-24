import {prime, lcm, gcd, modInv, modPow} from 'bigint-crypto-utils'

export interface PublicKey {
    n: BigInt,
    e: BigInt
};

export interface PrivateKey {
    n: BigInt,
    d: BigInt
};

const DEFAULT_KEY_SIZE: number = 2048;

export default class RSA {
    public keySize = DEFAULT_KEY_SIZE;

    public p: BigInt;
    public q: BigInt;
    public n: BigInt;
    public λ: BigInt;
    public e: BigInt;
    public d: BigInt;

    constructor(keySize: number = DEFAULT_KEY_SIZE) {
        this.keySize = keySize;
    }

    private #getRandomPrime(size: number = this.keySize / 2): BigInt {
        return prime(size)
    }

    private #getLeastCommonMultiple(a: BigInt, b: BigInt): BigInt {
        return lcm(a, b);
    }
    
    private #getGreatestCommonDivisor(a: BigInt, b: BigInt): BigInt {
        return gcd(a, b);
    }

    private async #getCoPrime(input: BigInt): BigInt {
        while (true) {
            const random: BigInt = await this.#getRandomPrime(32);
            if (this.#getGreatestCommonDivisor(random, input) === BigInt(1)) {
                return random;
            }
        }
    }

    private #getModularInverse(input: BigInt, modulo: BigInt): BigInt {
        return modInv(input, modulo)
    }


    private async #generateKeyValues(): void {
        this.p = await this.#getRandomPrime();
        this.q = await this.#getRandomPrime();
        this.n = this.p * this.q;
        this.λ = this.#getLeastCommonMultiple(this.p - BigInt(1), this.q - BigInt(1));
        this.e = await this.#getCoPrime(this.λ);
        this.d = this.#getModularInverse(this.e, this.λ)
    }

    private #getPublicKey(): PublicKey {
        return {
            n: this.n.toString(),
            e: this.e.toString()
        };
    }
    
    private #getPrivateKey(): PrivateKey {
        return {
            n: this.n.toString(),
            d: this.d.toString()
        };
    }

    public async generateKeys(): Array<PublicKey, PrivateKey> {
        await this.#generateKeyValues();

        return [this.#getPublicKey(), this.#getPrivateKey()]
    }

    public encrypt(message: number): BigInt {
        return modPow(BigInt(message), this.e, this.n);
    }
    
    public decrypt(cypher: number): BigInt {
        return modPow(BigInt(cypher), this.d, this.n);
    }
}