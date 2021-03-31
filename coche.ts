interface CocheBase{
	getModelo():string;
	getVelocidad():number;
}

class Coche implements CocheBase{

	//propiedades
	public color: string;
	public modelo: string;
	public velocidad: number;

	//constructor

	constructor(modelo:any =null){

		this.color="Blanco";
		this.velocidad=0;
		if (modelo==null){
			this.modelo="BMW Genérico";}
			else{
				this.modelo=modelo;
			}
	}

	//métodos getter y setter
	public getColor(){
		return this.color;
	}
	public setColor(color:string){
		this.color=color;
	}
	public getModelo(){
		return this.modelo;
	}
	public setModelo(modelo:string){
		this.modelo=modelo;
	}
	public getVelocidad(){
		return this.velocidad;
	}
	/*public setVelocidad(velocidad:number){
		this.velocidad=velocidad;
	}*/

	public acelerar(){
		this.velocidad++;
	}
	public frenar(){
		this.velocidad--;
	}
	
}
//creación de un objeto
var coche1=new Coche("Renault Clio");
var coche2=new Coche();
var coche3=new Coche();
//asignación de un color al coche
coche1.setColor("rojo");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.frenar();
coche2.setColor("azul");
coche3.setColor("verde");
console.log("el modelo de coche 1 es: "+coche1.getModelo());
console.log("la velocidad del coche1 es: "+coche1.getVelocidad());
console.log("la velocidad del coche1 al frenar es: "+coche1.getVelocidad());
console.log("el color del coche uno es: "+coche1.getColor())
console.log("el color del coche uno es: "+coche2.getColor())
console.log("el color del coche uno es: "+coche3.getColor())