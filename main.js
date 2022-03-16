/*Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbreName(name) {
  let abrevacion = name.split(" "); //uso split para convertir el string de los nombres en un array de 2 elementos, para luego ...
  return (abrevacion[0][0] + '.' + abrevacion[1][0]).toUpperCase()
  //luego los retorno y con su index agarro el primer elemento (index cero) y luego el primer elemento de ese index (cero nuevamente y los separ con un punto)
}

console.log(abbreName("Valentina Salazar"))
console.log(abbreName("Michelle urcuyo"))

let abrev = (name) => {
  let newArr = name.split(" ");
  return (newArr[0][0]+ '.'+newArr[1][0]).toLowerCase()
}

console.log(abrev('Marcelo Salazar'))