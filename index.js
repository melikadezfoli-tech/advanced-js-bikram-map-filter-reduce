/*RESUELVE LOS EJERCICIOS AQUI
Ejercicio 1. Dado el array numbers crear una función 
llamada "elevados" que sea el resultado de elevar cada 
número a si mismo. > El array numbers está declarado*/

const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados= numbers.map(num => Math.pow(num,num));
console.log(elevados)


/*Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
generar un segundo array que consiga generar de salida el resultado esperado.
```
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
```*/

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result2 = foodList.map(food => {
  if (food === 'Pizza') {
    return 'Como soy de Italia, amo comer Pizza';
  } else if (food === 'Ramen') {
    return 'Como soy de Japón, amo comer Ramen';
  } else if (food === 'Paella') {
    return 'Como soy de Valencia, amo comer Paella';
  } else if (food === 'Entrecot') {
    return 'Aunque no como carne, el Entrecot es sabroso';
  }
});
console.log (result2);

/*Dado el  array **staff**, crear un segundo array que forme frases 
como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const staffDescriptions = staff.map(persona => {
  const hobbies = persona.hobbies.join(' y ');
  return `${persona.name} es ${persona.role} y le gusta ${hobbies}.`;
});

console.log(staffDescriptions);

/* [ ] 4.- Crea un segundo array result4 a partir del array numbers2 
que devuelva solo los impares*/

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(num=>num%2==0);
console.log(result4)

/*5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
```
['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']
```

```
const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];*/


