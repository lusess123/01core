export interface ICache
{
    length(): number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;

    getKeys(): string[];
    getAndSetItem(key: string, setFun: () => string);
}


export class BaseCache implements ICache {


   // private static fCache: BaseCache = new BaseCache();

    private storage: Storage = sessionStorage;

    public constructor(s: Storage) {

        this.storage = s;
    }

    public length(): number {
        return this.storage.length;
    }
    public clear(): void {
        this.storage.clear();
    }
    public getItem(key: string): string | null {
        return this.storage.getItem(key);
    }
    public key(index: number): string | null {
        return this.storage.key(index);
    }
    public removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    public setItem(key: string, data: string): void {
        this.storage.setItem(key ,data);
    }

    public getKeys(): string[] {
        let _s: string[] = [];
        for (let i = 0; i < this.storage.length; i++) {
            _s.push(this.storage.key(i));
        }
        return _s;
    }

     
    public getAndSetItem(key: string, setFun: () => string): string {
        let _val = this.storage.getItem(key);
        if (_val == null) {
            _val = setFun();

            this.storage.setItem(key, _val);
        }
        return _val;
    }

     


}

export const SessionCache: ICache = new BaseCache(sessionStorage);

export const AppCache: ICache = new BaseCache(localStorage);






