"use strict";
function calculate(){
let a=document.forms[0].price;
    let b=document.forms[0].count;
    let a1=document.forms[0].price1;
    let b1=document.forms[0].count1;
    let a2=document.forms[0].price2;
    let b2=document.forms[0].count2;
    let a3=document.forms[0].price3;
    let b3=document.forms[0].count3;
    let a4=document.forms[0].price4;
    let b4=document.forms[0].count4;
    let result=a.value*b.value+a1.value*b1.value+a2.value*b2.value+a3.value*b3.value+a4.value*b4.value;
    let res=document.getElementById("result");
    if(result<0)
    {res.innerHTML="Введены неправильные данные";}
    else{res.innerHTML="Стоимость: "+result+" рублей";}
}