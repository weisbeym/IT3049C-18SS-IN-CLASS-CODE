const literalRegex = /[a,e,i,o,u]/gi;
const constructorRegex = RegExp("[a,e,i,o,u]", "gi")

const names = "Name1, Name2, Name3"

const namesArray = names.split(", ") // [ "Name1", "Name2", "Name3" ]