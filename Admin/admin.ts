let usernames = ["Uyoon", "Sarhan", "Bilal", "Meekal", "Admin"];

if(usernames.length === 0){
for (let user of usernames) {
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
}
//If there are zero users,  comment the below one to check one above
usernames = []
if (usernames.length === 0){
    console.log("New users are required")
}
//new users
let current_users : string[] = ["Admin","Ibrahim","Munaf","Khizer","Sheeraz"]
let new_users : string[] = ["Admin","Umer","Shawaiz","Habib","Sheeraz"]

let current_users_lower : string[] = current_users.map(user => user.toLowerCase())
for (let new_user of new_users){
    if (current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Please take another name \n ${new_user} is already taken`)
    }else{
        console.log(`${new_user} is available`)
    }
}