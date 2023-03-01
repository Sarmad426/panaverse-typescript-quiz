const animals: string[] = ["Dog", "Cat", "Tiger", "Lion"]
for (let animal in animals) {
    console.log(animals[animal]);
}
console.log("\n");
for (let animal in animals) {
    console.log(`$ A ${animals[animal]} Would Make me Laugh.`);
}
console.log("\n");

for (let animal in animals) {
    if (animals[animal].toLowerCase() !== 'cat')
        console.log(`$ A ${animals[animal]} Would Make me Scare.`);
}