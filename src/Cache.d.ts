export interface ICache {
    length(): number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
    getKeys(): string[];
    getAndSetItem(key: string, setFun: () => string): any;
}
export declare class BaseCache implements ICache {
    private storage;
    constructor(s: Storage);
    length(): number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
    getKeys(): string[];
    getAndSetItem(key: string, setFun: () => string): string;
}
export declare const SessionCache: ICache;
export declare const AppCache: ICache;
