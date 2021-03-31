class Programa{

	public nombre:string;
	public version:number;

	//metodos getter y  setter
	setNombre(nombre:string){
		this.nombre=nombre;
}	

	setVersion(version:number){
		this.version=version;
	}	

	getNombre(){
		return this.nombre;
	}

	getVersion(){
		return this.version;
	}
}

class EditorVideo extends Programa{

	public timeline:number;

	setTimeline(timeline:number){
		this.timeline=timeline;
	}

	getTimeline(){
		return this.timeline;
	}

	getAllData():String{
		return this.getNombre()+ " - "+this.getVersion()+" - "+this.getTimeline();
	}
}

var editor=new EditorVideo();

editor.setVersion(8);
editor.setNombre("Camtasia Studio");
editor.setTimeline(4000);
console.log(editor.getAllData());
//lógica del formulario

var programas=[];

function guardar(){

	var nombre= (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa=new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);
	
	programas.push(programa);

	var list="";

	for(var i=0;i<programas.length;i++){
		list=list+"<li>"+programas[i].getNombre()+"</li>";
	}

	var listado=<HTMLElement> document.getElementById("listado");

	listado.innerHTML=list;

	 (<HTMLInputElement>document.getElementById("nombre")).value="";

}

//función normal
/*
setInterval(function(){
console.log("hola");

},1000);*/

//función de flecha

setInterval(()=>{
console.log("hola");

},1000);

var frutas=[

'Manzana',
'Naranja',
'Platano'
]
//función map
var recorrer=frutas.map(fruta=>{

console.log(fruta);
console.log(fruta.length);

});