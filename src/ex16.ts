const guests: string[] = ["Salman", "Mehboob", "Abid", "Tahmoor"]
console.log(`${guests[0]} i would like to invite you to a dinner party.`)
console.log(`${guests[1]} i would like to invite you to a dinner party.`)
console.log(`${guests[2]} i would like to invite you to a dinner party.`)
console.log(`${guests[3]} is not coming to the party of some reason.`)
// Updated the Guest
guests[3] = "Fakhir"
console.log(`${guests[0]} i would like to invite you to a dinner party.`)
console.log(`${guests[1]} i would like to invite you to a dinner party.`)
console.log(`${guests[2]} i would like to invite you to a dinner party.`)
console.log(`${guests[3]} i would like to invite you to a dinner party.`)
console.log(`\n I just Found a bigger Dinner Table.`)
guests.unshift("Akmal")
guests.push("Naveed");
console.log(`${guests[0]} i would like to invite you to a dinner party.`)
console.log(`${guests[1]} i would like to invite you to a dinner party.`)
console.log(`${guests[2]} i would like to invite you to a dinner party.`)
console.log(`${guests[3]} i would like to invite you to a dinner party.`)
console.log(`${guests[4]} i would like to invite you to a dinner party.`)
console.log(`${guests[5]} i would like to invite you to a dinner party.`)

console.log(`The dinner table i ordered will not be able to deliver at time.`)
console.log(`Now i can only invite 2 people to the dinner`);

while (guests.length > 2) {
    let length: number = guests.length;
    // console.log(length);
    console.log(`${guests[length - 1]} I am sorry i cannot invite you to my dinner Party: `)
    guests.pop()
}
console.log(`${guests[0]} i would like to invite you to a dinner party.`)
console.log(`${guests[1]} i would like to invite you to a dinner party.`)
export { }