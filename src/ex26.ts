let age: number = 23
if (age < 2) {
    console.log("That person is a baby: ");
}
else if (age >= 2 && age <= 4) {
    console.log("The person is toddler.");
}
else if (age >= 4 && age <= 13) {
    console.log("The person is a Kid.");
}
else if (age >= 13 && age <= 20) {
    console.log("The person is a Teenager.");
}
else if (age >= 20 && age >= 65) {
    console.log("The person is an adult.");
}