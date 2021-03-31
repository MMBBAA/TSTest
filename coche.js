var Coche = /** @class */ (function () {
    //constructor
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Genérico";
        }
        else {
            this.modelo = modelo;
        }
    }
    //métodos getter y setter
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    /*public setVelocidad(velocidad:number){
        this.velocidad=velocidad;
    }*/
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
//creación de un objeto
var coche1 = new Coche("Renault Clio");
var coche2 = new Coche();
var coche3 = new Coche();
//asignación de un color al coche
coche1.setColor("rojo");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.frenar();
coche2.setColor("azul");
coche3.setColor("verde");
console.log("el modelo de coche 1 es: " + coche1.getModelo());
console.log("la velocidad del coche1 es: " + coche1.getVelocidad());
console.log("la velocidad del coche1 al frenar es: " + coche1.getVelocidad());
console.log("el color del coche uno es: " + coche1.getColor());
console.log("el color del coche uno es: " + coche2.getColor());
console.log("el color del coche uno es: " + coche3.getColor());
