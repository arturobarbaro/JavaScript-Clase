var weakMap=new WeakMap();
var daw={nombre: "DAW", duracion: "3 horas"}
var diw={nombre: "DIW", duracion: "6 horas"}
weakMap.set(daw,"7 alumnos");
weakMap.set(diw,"2 alumnos");
console.log(weakMap.get(daw));
