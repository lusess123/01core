/// <reference types="jquery" />
export declare module Post {
    interface ISubmitData {
        SubmitSign: string;
        DataValue: string;
    }
    interface IDict<T> {
        [index: string]: T;
    }
    interface IDataRow extends IDict<string | number> {
        [index: string]: string | number;
    }
    interface IDataSet extends IDict<Array<IDataRow>> {
        [index: string]: Array<IDataRow>;
    }
    class Util {
        static Post($dom: JQuery): void;
        static IsEmpty(obj: any): boolean;
        static IsNull(obj: any): boolean;
        static CheckDataSet(ds: IDataSet): IDataSet;
        static createDataSet(jDomList: Array<ISubmitData>): IDataSet;
        static joinDataSet(ds: IDataSet, tableName: string, rowNumber: number, colName: string, val: string): IDataSet;
    }
}
