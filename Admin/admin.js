var usernames = ["Uyoon", "Sarhan", "Bilal", "Meekal", "Admin"];
if (usernames.length === 0) {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var user = usernames_1[_i];
        if (user === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
//If there are zero users,  comment the below one to check one above
// usernames = []
// if (usernames.length === 0){
//     console.log("New users are required")
// }
//new users
var current_users = ["Admin", "Ibrahim", "Munaf", "Khizer", "Sheeraz"];
var new_users = ["Admin", "Umer", "Shawaiz", "Habib", "Sheeraz"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Please take another name \n ".concat(new_user, " is already taken"));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
}
