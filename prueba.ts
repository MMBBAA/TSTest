function holaMundo(nombre2){
	return "Hola Mundo, soy "+nombre2;
}

//var nombre="Alberto!";
var resultado=holaMundo(nombre2);

var etiqueta=<HTMLElement>document.getElementById("container");

etiqueta.innerHTML=resultado;

//Variables y tipos

var nombre2:any=12;
var edad:number=22;
var programador:boolean=true;
var langs:Array<string>=["php","javascript","css"];

//nombre2=102;
etiqueta.innerHTML=nombre2+" - "+edad;

var a=7;
var b=12;

if(a===7){
	let a=4;
	var b=1;
	console.log("dentro del if: "+a+" - "+b);
}
console.log("fuera del if: "+a+" - "+b);

//Funciones y tipado

function devuelveNumero(num:number):string{
	return "número devuelto "+num;
}

function devuelveString(texto:string):boolean{
	if(texto=="hola"){
		var num=true;
	}
	var num=false;
	return num;
}

alert(devuelveNumero(34));
alert(devuelveString("adios"));