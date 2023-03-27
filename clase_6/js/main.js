class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
  }

  vender(cant) {
    if (cant <= this.stock) {
      this.stock = this.stock - cant;
      return this.precio * cant;
    } else {
      return "Sin stock";
    }
  }
  mostrarInfo() {
    return (
      "Nombre: " +
      this.nombre +
      " Precio: $" +
      this.precio +
      " stock:" +
      this.stock
    );
  }
}
const libro = new Producto(
  "Harry Potter y la cámara de los secretos",
  "12000",
  5
);
/* 
console.log(libro);

console.log(libro.mostrarInfo());
let venta=libro.vender(4);
alert("La venta del libro es $",venta);
console.log(libro.mostrarInfo());

const obj={
  nombre:"Dani",
  tel:"3123123123"
}
console.log(obj
  ); */
const array=[];
console.log(array);
const numeros= [1,2,6,4,3,-9,9,133,-3.14]
console.log(numeros);
const nombres=["Juan", "Lorena", "Homero", "Marge", "Bart"];
console.log(nombres);
const mixto= [1, "Audi", true, {nombre: "Dani",}, 2.4]
console.log(mixto);
const cajonCubiertos= ["Cuchillos", "Cucharas", "Tenedores", "Cucharitas"];
console.log(cajonCubiertos[0]);
console.log(cajonCubiertos[2]);
//console.log(numeros[3]<=numeros[4]);
/* const suma= numeros[2] + numeros[6]
console.log(numeros[2]);
console.log(numeros[6]);
console.log(suma);
 */
console.log(numeros[3]);
numeros[3]=66;
console.log(numeros);

for (let index = 0; index < cajonCubiertos.length; index++) {
  console.log(cajonCubiertos[index]);
}
console.log(cajonCubiertos.length);

//agrega elementos al final del array
console.log(numeros);
numeros.push(-245,44,21,0)
console.log(numeros);

//agrega elementos al principio del array

numeros.unshift(200)
console.log(numeros);

//Quita elemento del final pop()
numeros.pop()
numeros.pop()
console.log(numeros);

//quitar elemento de principio
numeros.shift()
console.log(numeros);