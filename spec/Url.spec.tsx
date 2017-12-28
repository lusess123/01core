import  jsdom  = require('jsdom');
var $ = require("jquery")( new jsdom.JSDOM(`...`).window);

import {expect} from 'chai';
import * as UtilFile from '../dist/cjs/Url';
var sinon = require('sinon');
var window =    window ? window :  {};

describe("Core", () => {
    const coreFile = UtilFile.Core ;
    let server ;
    before( ()=> { server = sinon.fakeServer.create(); });
    after( ()=> { server.restore(); });
    
    it("AkPost Object", () => {
        let  callback =  sinon.spy();
        coreFile.AkPost("",{},callback);
        server.requests[0].respond(
            200,
            { "Content-Type": "application/json" },
            JSON.stringify({ActionType:"Object",Obj:"123"})
        );
    
        sinon.assert(callback.calledOnce);

    });


});