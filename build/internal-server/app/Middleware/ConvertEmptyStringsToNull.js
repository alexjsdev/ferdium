"use strict";class ConvertEmptyStringsToNull{async handle({request:t},e){Object.keys(t.body).length>0&&(t.body=Object.assign(...Object.keys(t.body).map((e=>({[e]:""!==t.body[e]?t.body[e]:null}))))),await e()}}module.exports=ConvertEmptyStringsToNull;