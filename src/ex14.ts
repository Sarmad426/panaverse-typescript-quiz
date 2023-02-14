/*
    Changing Guest List: You just heard that one of your guests can’t make the dinner, 
    so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/
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
export { }