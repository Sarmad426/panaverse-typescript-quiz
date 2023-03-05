const magicians: string[] = ["Harry", "Henry", "Bray Wyatt", "Brock Lesnar", "Shelton Benjamen", "John Cena", "Roman Reigns"];
const showMagicians = (magicians: string[]): void => {
    for (let magician in magicians) {
        console.log(`${magicians[magician]} is a Magician`);
    }
}
showMagicians(magicians);
const makeGreat = (magicians: string[]): string[] => {
    let new_magicians = magicians;
    for (let magician in new_magicians) {
        new_magicians[magician] += " Great Magician";
    }
    return new_magicians
}
makeGreat(magicians);
console.log('\n')
for (let magician in magicians) {
    console.log(`${magicians[magician]}`);
}

showMagicians(magicians);
export { }
