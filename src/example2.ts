const items = document.getElementById("todoItems") as HTMLElement;
let submit = document.getElementById("senden") as HTMLElement;
let input = document.getElementById("artikelerfasser") as HTMLInputElement;
let empty: boolean = true;
let text: string = "";
let count: number = 0;
let countTxt = document.getElementById("todoDatasTxt") as HTMLInputElement;

function msg(txt: string){
	text = txt;
	return text;
}

function counterFunc(adder: number){
	count += adder;
	return count;
}

function submitTodo(){
	empty = false;
	items.append(msg(input.value), "  ,  ");
	countTxt.innerHTML = "Entrys: "+ counterFunc(1);
	input.value = "";
}

function deleteFunc(){
	items.innerHTML = "";
	count = 0;
	countTxt.innerHTML = "Entrys: "+ count;
}
