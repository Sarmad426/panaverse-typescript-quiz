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

for (let guest in guests) {
    console.log(`${guests[guest]} i would like to invite you to a dinner party.`)

}
console.log(`I am inviting ${guests.length} members: `);
export { }