"use strict";
const items = document.getElementById("todoItems");
let submit = document.getElementById("senden");
let input = document.getElementById("artikelerfasser");
let empty = true;
let text = "";
let count = 0;
let countTxt = document.getElementById("todoDatasTxt");
function msg(txt) {
    text = txt;
    return text;
}
function counterFunc(adder) {
    count += adder;
    return count;
}
function submitTodo() {
    empty = false;
    items.append(msg(input.value), "  ,  ");
    countTxt.innerHTML = "Entrys: " + counterFunc(1);
    input.value = "";
}
function deleteFunc() {
    items.innerHTML = "";
    count = 0;
    countTxt.innerHTML = "Entrys: " + count;
}
