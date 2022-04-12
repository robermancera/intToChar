let numero = prompt("Dime un numero:", )


let uno = ("-" + "\n" + " |" + "\n" + " |" + "\n" + "- -")
let dos = ("-- " + "\n" + "  |" + "\n" + "--" + "\n" + "|" + "\n" + " --")
let tres = ("--" + "\n" + "  |" + "\n" + "--" + "\n" + "  |" + "\n" + "--")
let cuatro = ("|"+"__"+"|" + "\n" + "   |")
let cinco = (" __" + "\n" + "|" +  "\n" + "|" + "\n" + "--" + "\n" + "  |" + "\n" + "  |" + "\n" + "--")
let seis = ("|" + "\n" + " --" + "\n" + "|  |" + "\n" + " --")
let siete = ("--" + "\n" + "  |" + "\n" + " -" + "\n" + "  |")
let ocho = (" --" + "\n" + "|  |" + "\n" + " --" + "\n" + "|  |" + "\n" + " --")
let nueve = (" --" + "\n" + "|  |" + "\n" + " --" + "\n" + "   |" + "\n"+ " --" )
let cero = (" --" + "\n" + "|  |" +"\n"+ "|  |" + "\n" + " --")


if(numero == "1"){
  numero = uno
}
if(numero == "2"){
  numero = dos
}
if(numero == "3"){
  numero = tres
}
if(numero == "4"){
  numero = cuatro
}
if(numero == "5"){
  numero = cinco
}
if(numero == "6"){
  numero = seis
}
if(numero == "7"){
  numero = siete
}
if(numero == "8"){
  numero = ocho
}
if(numero == "9"){
  numero = nueve
}
if(numero == "0"){
  numero = cero
}

console.log(numero)
