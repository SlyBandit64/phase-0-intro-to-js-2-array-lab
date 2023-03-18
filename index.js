// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
 
function appendCat(name) {
  return appendCat = [...cats, "Broom"]
}

function prependCat(name) {
    return prependCat = [ "Arnold", ...cats]
  }

function removeLastCat() {
   return removeLastCat = [...cats.slice(0,2)]
} 

function removeFirstCat() {
    return removeFirstCat = [...cats.slice(1)]
}

//This took me so long to figure out T_T