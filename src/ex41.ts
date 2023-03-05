let sandwiches: string[] = ["Salad", "Chicken", "Egg", "Ketchup", "Mayonees", "Daal Mix Masla"];
let sandwich1: string[] = [sandwiches[0], sandwiches[1], sandwiches[3]]
let sandwich2: string[] = [sandwiches[2], sandwiches[1], sandwiches[5]]
let sandwich3: string[] = [sandwiches[3], sandwiches[2], sandwiches[4]]

let sandwichSummary = (sandwiches: string[]): string[] => {
    let sandwich: string[] = sandwiches;
    console.log("Sandwich Summary: ");
    return sandwich;
}
console.log(sandwichSummary(sandwich1));
console.log(sandwichSummary(sandwich2));
console.log(sandwichSummary(sandwich3));
