// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat(name) { 
cats.push(name); // Modifying the original `cats` array 
return cats; // Returning the modified `cats` array 
} 

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice(0, cats.length - 1)
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats; 
}
