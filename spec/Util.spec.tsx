import {expect} from 'chai';
import * as UtilFile from '../dist/cjs/Util';
import UtilCore = UtilFile.Core;
describe("Util", () => {

    describe("Core", () => {
        const util = UtilCore.Util;

        describe("Util", () => {
            //IsPure
            it("#IsPure", () => {
                const _obj = {
                    a: 123
                };
               // const _obj2 = new expect();
                
                expect(util.IsPure([])).to.be.ok;
               // expect(util.IsPure(expect)).to.not.be.ok;

            })

        });

    });
    it("#checkHtml", () => {
        const _str = "<divddddd";
        expect(UtilFile.checkHtml(_str)).to.not.be.ok;
        const _str1 = "<div>ddddd</div>";
        expect(UtilFile.checkHtml(_str1)).to.be.ok;
    })
})