let current_users: string[] = ["Sarmad", "Fakhir", "Bakhtiar", "Akmal", "Nawaz"];
let new_users: string[] = ["Sarmad", "Mosh", "Admin", "Akmal", "Martin"];
for (let user in new_users) {
    // for (let counter: number = 0; counter <= current_users.length; counter++) {
    //     if (new_users[user] == current_users[counter]) {
    //         console.log(`${new_users[user]} is not available.`);
    //     }
    //     else if (counter == 5 && new_users[user] != current_users[counter]) {
    //         console.log(`${new_users[user]} available.`);
    //     }
    // }
    if (current_users.includes(new_users[user])) {
        console.log(`${new_users[user]} is not available.`);
    } else {
        console.log(`${new_users[user]} available.`);
    }
}
export { }