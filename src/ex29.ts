let current_users: string[] = ["Sarmad", "Fakhir", "Bakhtiar", "Akmal", "Nawaz"];
let new_users: string[] = ["Sarmad", "Mosh", "Admin", "Akmal", "Martin"];
for (let user in new_users) {
    if (current_users.includes(new_users[user])) {
        console.log(`${new_users[user]} is not available.`);
    } else {
        console.log(`${new_users[user]} available.`);
    }
}
export { }