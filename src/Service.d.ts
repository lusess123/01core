export interface IAppService {
    getNextMenuUrlInMenuTree(url: string): string;
}
export declare const regAppSercice: (instance: IAppService) => void;
export declare const getAppService: () => IAppService;
