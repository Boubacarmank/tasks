export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map(number => number * 3);
}

export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map(number => parseInt(number) || 0);
}

export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map(amount => parseInt(amount.replace('$', '')) || 0);
};

export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter(message => !message.endsWith('?'))
        .map(message => message.endsWith('!') ? message.toUpperCase() : message);
};

export function countShortWords(words: string[]): number {
    return words.filter(word => word.length < 4).length;
}

export function allRGB(colors: string[]): boolean {
    return colors.every(color => ['red', 'green', 'blue'].includes(color));
}

export function makeMath(addends: number[]): string {
    const sum = addends.reduce((acc, val) => acc + val, 0);
    return sum + '=' + (addends.length === 0 ? '0' : addends.join('+'));
}

export function injectPositive(values: number[]): number[] {
    const index = values.findIndex(value => value < 0);
    const sum = values.slice(0, index === -1 ? values.length : index).reduce((acc, val) => acc + val, 0);
    
    if (index === -1) {
        return [...values, sum];
    } else {
        const newArr = [...values];
        newArr.splice(index + 1, 0, sum);
        return newArr;
    }
}
