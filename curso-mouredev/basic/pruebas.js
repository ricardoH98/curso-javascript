let number = Math.floor(Math.sqrt(37))

console.log(number)

let arr = [2, 3, 4, 'ab' , true]

console.log(arr.includes(4))


let value = '123a   '
let valFloat = parseFloat('123a')
console.log(String(value).trim())
console.log(String(valFloat))

console.log(String(undefined))

console.log('989     '.trim())



function getVarInfo(varName, value) {
  return { varName, value };
}

const user = getVarInfo("user", { name: "Alice" }); // 👈 Pasas el nombre como string

console.log(user)
console.log(typeof user)