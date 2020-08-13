class Auto{ //creacion de la clase Auto con su constructor
    constructor(marca,modelo,puertas,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.precio = precio;
    }
}

class Moto{//creacion de la clase Moto con su constructor
    constructor(marca,modelo,cilindrada,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.cilindrada = cilindrada;
    }
}

//declaracion e inicializacion de los objetos
let auto1 = new Auto("Peugeout","206",4,200000.00);
let auto2 = new Auto("Peugeot","208",5,250000.00);
let moto1 = new Moto("Honda","Titan",125,60000.00);
let moto2 = new Moto("Yamaha","YBR",160,80500.50);

//insercion de los objetos en el arreglo
let vehiculos = [auto1,auto2,moto1,moto2];

//funcion para conseguir el vehiculo mas caro
function vehiculoMasCaro(vehiculos){
    let masCaro = vehiculos[0] , i = 0;
    let num = vehiculos.length;
    console.log(num);
    while(vehiculos.length-1>i){
        if(masCaro.precio <= vehiculos[i].precio){
            masCaro = vehiculos[i];
        }
        i++;
    }
    return masCaro;
}

//funcion para conseguir el vehiculo mas barato
function vehiculoMasBarato(vehiculos){
    let masBarato = vehiculos[0], i = 0; 
    while(vehiculos.length>i){
        if(masBarato.precio >= vehiculos[i].precio){
            masBarato = vehiculos[i];
        }
        i++;
    }
    return masBarato;
}


////funcion para conseguir el vehiculo que contiene la letra "Y"
function contieneYenNombre(vehiculos){
    let flag = 0 , i = 0;
    while(vehiculos.length>i){
        if(vehiculos[i].modelo.includes("Y")){
            return vehiculos[i];
        };
       i++; 
    };
    return null;
}

////funcion para ordenar el arreglo en funcion de su precio
function ordernarVehiculos(vehiculos){
    let i = 0;
    vehiculos2 = vehiculos.sort(function(a,b){return (b.precio-a.precio)});
    while(vehiculos2.length > i ){
       console.log(`${i+1} : ${vehiculos2[i].marca} ${vehiculos2[i].modelo}`) 
       i++;
    }
}

var masCaro = vehiculoMasCaro(vehiculos);
var masBarato = vehiculoMasBarato(vehiculos);
var contiene = contieneYenNombre(vehiculos);


//muestra por consola
console.log(`Marca:${vehiculos[0].marca}//Modelo:${vehiculos[0].modelo}//Puertas:${vehiculos[0].puertas}//Precio $${vehiculos[0].precio}`);
console.log(`Marca:${vehiculos[1].marca}//Modelo:${vehiculos[1].modelo}//Puertas:${vehiculos[1].puertas}//Precio $${vehiculos[1].precio}`);
console.log(`Marca:${vehiculos[2].marca}//Modelo:${vehiculos[2].modelo}//Puertas:${vehiculos[2].cilindrada}//Precio $${vehiculos[2].precio}`);
console.log(`Marca:${vehiculos[3].marca}//Modelo:${vehiculos[3].modelo}//Puertas:${vehiculos[3].cilindrada}//Precio $${vehiculos[3].precio}`);
console.log("=============================");
console.log(`Vehiculo mas caro:${masCaro.marca} ${masCaro.modelo}`);
console.log(`Vehiculo mas barato:${masBarato.marca} ${masBarato.modelo}`);
console.log(`Vehículo que contiene en el modelo la letra ‘Y’:${contiene.marca} ${contiene.modelo} $${contiene.precio}`);
console.log("=============================");
console.log("Vehículos ordenados por precio de mayor a menor:");
ordernarVehiculos(vehiculos);