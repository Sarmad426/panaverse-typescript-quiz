let user_names: string[] = ["Sarmad", "Mosh", "Admin", "Akmal", "Martin"];
for (let user in user_names) {
    console.log(user_names[user]);
    if (user_names[user].toLowerCase() === "admin") {
        console.log(`Hello ${user_names[user]}, would you like to see a status report.`);
    } else {
        console.log(`Hello ${user_names[user]}, thank you for logging in again.`);
    }
}