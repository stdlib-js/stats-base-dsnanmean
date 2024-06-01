"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=a(function(g,s){
var c=require('@stdlib/stats-base-dsnanmeanpn/dist');function y(e,r,n){return c(e,r,n)}s.exports=y
});var v=a(function(h,u){
var x=require('@stdlib/stats-base-dsnanmeanpn/dist').ndarray;function f(e,r,n,p){return x(e,r,n,p)}u.exports=f
});var m=a(function(k,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=t(),l=v();j(d,"ndarray",l);q.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=m(),i,o=_(R(__dirname,"./native.js"));E(o)?i=O:i=o;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
