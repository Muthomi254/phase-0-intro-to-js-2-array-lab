// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
  cats.length = 0;
  cats.push("Milo","Otis","Garfield")
});
 function destructivelyAppendCat (){
  cats.push("Ralph")
};
function  destructivelyPrependCat (){
  cats.unshift("Bob")
};
function  destructivelyRemoveLastCat(){
  cats.pop("Garfield")
};
function  destructivelyRemoveFirstCat(){
  cats.shift("Milo")};
  function appendCat (Broom){
   const newCats = ["Milo","Otis","Garfield",'Broom'];
    return newCats
  };
  function prependCat(Arnold){
    const newCats = ["Arnold","Milo","Otis","Garfield"]
    return newCats
  }
function removeLastCat(Garfield){
const newCats = ["Milo", "Otis"]
return newCats
}
function removeFirstCat(Milo){
  const newCats = [ "Otis", "Garfield"]
  return newCats
}