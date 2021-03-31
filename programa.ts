//decorador


/*	le estamos añadiendo un nuevo metodo que se va a llamar lanzamiento
el decorador arranque es una funcion normal, donde lo usemos le vamos a añadir un nuevo método
que se va a llamar lanzamiento,que es una función normal y va a devolver un simple console.log*/
function arranque(lanzar:string){
	return function(target:Function){
		target.prototype.lanzamiento=function():void{
			alert(lanzar);
		}
	}
}
//uso del decorador arranque
//cuando se instancie Programa
@arranque('lanzamiento del curso de nodeJS')
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
/*cuando use programa voy a tener un nuevo método que se llama lanzamiento, el 
definido en "target.prototype.lanzamiento". así que ahora mismo puedo decirle que lo ejecute va a hacer un ALERT*/
var programa=new Programa();
programa.lanzamiento();


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
//función map para recorrer el array
var recorrer=frutas.map(fruta=>{

console.log(fruta);
console.log(fruta.length);

});
