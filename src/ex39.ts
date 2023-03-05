const magicians: string[] = ["Harry", "Henry", "Bray Wyatt", "Brock Lesnar", "Shelton Benjamen", "John Cena", "Roman Reigns"];
for (let magician in magicians) {
    console.log(`${magicians[magician]} is a Magician`);
}
console.log('\n')
const makeGreet = (magicians: string[]): string[] => {
    for (let magician in magicians) {
        magicians[magician] += " Great Magician";
    }
    return magicians
}
makeGreet(magicians);
console.log('\n')
for (let magician in magicians) {
    console.log(`${magicians[magician]}`);
}

export { }