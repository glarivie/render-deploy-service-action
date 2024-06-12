'use strict';

var s = require('axios');
var e = require('@actions/core');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var s__default = /*#__PURE__*/_interopDefault(s);
var e__default = /*#__PURE__*/_interopDefault(e);

var o=s__default.default.create({baseURL:"https://api.render.com/v1",headers:new s.AxiosHeaders({Authorization:`Bearer ${e__default.default.getInput("apiKey",{required:!0})}`})});async function a(r){let{data:t}=await o({method:"POST",url:`/services/${r}/deploys`});e__default.default.info(`Deploy [${t.commit.id}] ${t.commit.message}`);}a(e__default.default.getInput("serviceId",{required:!0})).catch(r=>e__default.default.setFailed(r.message));
