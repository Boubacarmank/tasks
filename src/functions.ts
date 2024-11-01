export function fahrenheitToCelius(temperature: number): number {
    return (temperature - 32) * 5 / 9;
}

export function add3(first: number, second: number, third: number): number {
    return (first > 0 ? first : 0) + (second > 0 ? second : 0) + (third > 0 ? third : 0);
}

export function shout(message: string): string {
    return message.toUpperCase() + "!";
}

export function isQuestion(message: string): boolean {
    return message.trim().endsWith('?');
}

export function convertYesNo(word: string): boolean | null {
    const lower = word.toLowerCase();
    if (lower === "yes") return true;
    if (lower === "no") return false;
    return null;
}
