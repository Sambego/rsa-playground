export const asciiToHex = (input: string): string => {
    return input
      .split('')
      .map((character: string, index: number) => input.charCodeAt(index).toString(16))
      .join('');
};

export const bigIntToHex = (input: BigInt): string => {
    return input.toString(16);
};

export const decimalToHex = (input: number): string => {
    return input.toString(16);
};

export const binaryToHex = (input: string): string => {};

export const base64ToHex = (input:string): string => {};

export const hexToAscii = (input: string): string => {
    return input
        .match(/.{1,2}/g)
        .map(hexValue => String.fromCharCode(parseInt(hexValue, 16)))
        .join('');
};


export const hexToBigInt = (input: string): BigInt => {
    if (!input || input === '') {
        return BigInt(0);
    }
    
    return BigInt(`0x${input}`);
}

export const hexToDecimal = (input: string): number => {
    return parseInt(input, 16);
};

export const hexToBinary = (input: string): number => {
    return parseInt(input, 16).toString(2).padStart(8, '0');
}

export const hexToBase64 = (input: string): string => {
    return btoa(String.fromCharCode.apply(null,
        input?.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
      );
};

export const truncate = (input: string, max = 40, end = false): string => {
    if (!input! || input?.length <= max) {
        return input;
    }

    if (end) {
        
        return [...input.split('').slice(0, max), '...'].join('');
    }

    const segmentLength = Math.floor(max / 2);
    return [...input.split('').slice(0, segmentLength), '...', ...input.split('').slice(-segmentLength)].join('');
}

export const throttle = (callback, limit = 500) => {
    var waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false;
            }, limit);
        }
    }
}

export const debounce = (callback, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { callback.apply(this, args); }, timeout);
    };
  }