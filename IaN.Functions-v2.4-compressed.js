/*
    @preserve JS.Functions v2.4
    @license Copyright 2021 Eliton Lisboa
    @license MIT Licensed (https://github.com/Eliton-Lisboa/JS.Functions/blob/main/LICENSE)
*/
"use strict";const Data={},_DEBUG={alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],names:["João","Pedro","Victor","Maria","Eliton","Andrielly","Eduardo","Eduarda","Joaquin","Marcos","Stefane","Jeazon","Andréa"],keys:"adbecfdgehfigjhkiljmknlompnqorpsqtrusvtwuxvywzxaybzcADBECFDGEHFIGJHKILJMKNLOMPNQORPSQTRUSVTWUXVYWZXAYBZC",object:{image:"./jpg image.png",title:"My new book",subtitle:"nerd adventures",tags:["adventure","terror","arcade","action"],writer:"I",views:15500},function:()=>"Hello, World!",html:"<div> <p> Hello, World! </p> </div>"},_INFOS={out:e=>Array.isArray(e)&&1==e.length?e[0]:e,add:(_$add=["arrays","strings","data"])=>{const add={arrays:{func:arrays,implements:"Array"},strings:{func:strings,implements:"String"},data:{func:data,implements:"Data"}};Array.isArray(_$add)||(_$add=[_$add]);for(let x=0;x<_$add.length;x++)for(let y=0;y<Object.keys(add[_$add[x]].func).length;y++)eval(`${add[_$add[x]].implements}.${Object.keys(add[_$add[x]].func)[y]} = ${_$add[x]}.${Object.keys(add[_$add[x]].func)[y]}`)}},arrays={removeValues:(e,t)=>{let r=[],l=!0;Array.isArray(t)||(t=[t]);for(let s=0;s<e.length;s++){l=!0;for(let r=0;r<t.length;r++)e[s]===t[r]&&(l=!1);l&&r.push(e[s])}return r},removePositions:(e,t)=>{let r=[];Array.isArray(t)||(t=[t]);for(let l=0;l<e.length;l++)arrays.verifyValues(t,l)||r.push(e[l]);return r},removeValuesEquivalence:(e,t)=>{let r=[],l=!1;e=arrays.addEquivalence(e);for(let t=0;t<e.length;t++)r.push([]);Array.isArray(t)||(t=[t]);for(let s=0;s<e[0].length;s++){l=!1;for(let r=0;r<e.length;r++)for(let o=0;o<t.length;o++)arrays.verifyValues(t,e[r][s])||(l=!0);if(l)for(let t=0;t<e.length;t++)r[t].push(e[t][s])}return r},verifyValues:(e,t)=>{let r=[],l=!1;Array.isArray(t)||(t=[t]);for(let s=0;s<t.length;s++){l=!1;for(let r=0;r<e.length;r++)e[r]===t[s]&&(l=!0);l?r.push(!0):r.push(!1)}return _INFOS.out(r)},valuesPosition:(e,t)=>{let r=[],l=!1;Array.isArray(t)||(t=[t]);for(let s=0;s<t.length;s++){r.push([]);for(let o=0;o<e.length;o++)l=!1,e[o]===t[s]&&(l=!0),l&&r[s].push(o)}for(let e=0;e<r.length;e++)1==r[e].length&&(r[e]=r[e][0]);return _INFOS.out(r)},addEquivalence:(e,t)=>{let r=e;for(let l=0;l<e.length;l++)if(e[l].length-1<e[arrays.check.larger(e)].length-1)for(let s=0;s<e[arrays.check.larger(e)].length-e[l].length+1;s++)r[l].push(t);return r},check:{larger:e=>{let t=0;for(let r=0;r<e.length;r++)e[r].length>e[t].length&&(t=r);return t},small:e=>{let t=0;for(let r=0;r<e.length;r++)e[r].length<e[t].length&&(t=r);return t}},changeValues:(e,t,r)=>{let l=[],s=!1,o=0;Array.isArray(t)||(t=[t],r=[r]);for(let a=0;a<e.length;a++){l.push([]);for(let n=0;n<e[a].length;n++){s=!1;for(let r=0;r<t.length;r++)e[a][n]===t[r]&&(s=!0,o=r);s?l[a].push(r[o]):l[a].push(e[a][n])}}return l},sumValues:(e,t)=>{let r=[];Array.isArray(t)||(t=[t]);for(let e=0;e<t.length;e++)r.push(-1);for(let l=0;l<e.length;l++)for(let s=0;s<t.length;s++)e[l]===t[s]&&r[s]++;return _INFOS.out(r)}},strings={valuesPosition:(e,t)=>{let r=[];Array.isArray(t)||(t=[t]);for(let l=0;l<t.length;l++){r.push(-1);for(let s=0;s<e.length;s++)e.substring(s,s+t[l].length)===t[l]&&(r[l]=s)}return _INFOS.out(r)},verifyValues:(e,t)=>{let r=[];Array.isArray(t)||(t=[t]);for(let l=0;l<t.length;l++){r.push(!1);for(let s=0;s<e.length;s++)e.substring(s,s+t[l].length)===t[l]&&(r[l]=!0)}return _INFOS.out(r)}},data={cryptography:(e,t=_DEBUG.keys,r=!0)=>{let l="";let s="",o="",a=[1,0];r&&(a=[0,1]);for(let e=a[0];e<t.length;e+=2)s+=t.substring(e,e+1);for(let e=a[1];e<t.length;e+=2)o+=t.substring(e,e+1);for(let t=0;t<e.length;t++)arrays.verifyValues(s,e.substring(t,t+1))?l+=o[arrays.valuesPosition(s,e.substring(t,t+1))]:l+=e.substring(t,t+1);return{result:l,morse:()=>{l="";const t=[{letter:"a",morse:".-"},{letter:"b",morse:"-..."},{letter:"c",morse:"-.-."},{letter:"d",morse:"-.."},{letter:"e",morse:"."},{letter:"f",morse:"..-."},{letter:"g",morse:"--."},{letter:"h",morse:"...."},{letter:"i",morse:".."},{letter:"j",morse:".---"},{letter:"k",morse:"-.-"},{letter:"l",morse:".-.."},{letter:"m",morse:"--"},{letter:"n",morse:"-."},{letter:"o",morse:"---"},{letter:"p",morse:".--."},{letter:"q",morse:"--.-"},{letter:"r",morse:".-."},{letter:"s",morse:"..."},{letter:"t",morse:"-"},{letter:"u",morse:"..-"},{letter:"v",morse:"...-"},{letter:"w",morse:".--"},{letter:"x",morse:"-..-"},{letter:"y",morse:"-.--"},{letter:"z",morse:"--.."},{letter:"0",morse:"-----"},{letter:"1",morse:".----"},{letter:"2",morse:"..---"},{letter:"3",morse:"...--"},{letter:"4",morse:"....-"},{letter:"5",morse:"....."},{letter:"6",morse:"-...."},{letter:"7",morse:"--..."},{letter:"8",morse:"---.."},{letter:"9",morse:"----."},{letter:".",morse:".-.-.-"},{letter:",",morse:"--..--"},{letter:"?",morse:"..--.."},{letter:"!",morse:"-.-.--"},{letter:"/",morse:"-..-."},{letter:"(",morse:"-.--."},{letter:")",morse:"-.--.-"},{letter:":",morse:"---..."},{letter:";",morse:"-.-.-."},{letter:"=",morse:"-...-"},{letter:"+",morse:".-.-."},{letter:"-",morse:"-....-"},{letter:"$",morse:"...-..-"},{letter:"@",morse:".--.-."},{letter:"Ø",morse:"---."},{letter:"&",morse:".-..."},{letter:" ",morse:"......."}];if(r)for(let r=0;r<e.split("").length;r++){let s=e.split("")[r];for(let l=0;l<t.length;l++)t[l].letter==e.split("")[r].toLowerCase()&&(s=t[l].morse);l+=s+" "}else for(let r=0;r<e.split(" ").length;r++){let s=e.split(" ")[r];for(let l=0;l<t.length;l++)t[l].morse==e.split(" ")[r].toLowerCase()&&(s=t[l].letter);l+=s+""}return l.trim()},ascii:()=>{if(l=[],r)for(let t=0;t<e.length;t++)l.push(e.substring(t,t+1).charCodeAt(0));else for(let t=0;t<e.length;t++)l.push(String.fromCharCode(e[t]));return l},roman:()=>{if(l="",r){let t=String(+e).split("");const r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];for(let e=2;e>=0;e--)l=(r[+t.pop()+10*e]||"")+l;l=Array(+t.join("")+1).join("M")+l}else l=0,e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,e=>{l+={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}[e]});return l}}},validation:(e,t)=>{let r=!1;return"phone"==e&&(r=/(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g.test(t)),r},createDB:()=>{const e={},t={};return{createTable:function(r){e[r]=[],t[r]={addRow:t=>{e[r].push(t)},getRow:t=>e[r][t],updateRow:(t,l)=>{Object.assign(e[r][t],l)},rows:()=>e[r]}},removeTable:function(r){delete e[r],delete t[r]},tables:t}}};