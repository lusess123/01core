// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface IAppService
{
    getNextMenuUrlInMenuTree(url: string): string;
}


 let SingleAppService: IAppService = null;

export const regAppSercice = function (instance: IAppService) {
      SingleAppService = instance;
}
export const getAppService = function (): IAppService {
    return SingleAppService;
}      