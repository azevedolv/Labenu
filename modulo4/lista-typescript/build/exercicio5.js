const users = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
function userAdmin(userList) {
    return userList.filter((user) => {
        return user.role === "admin";
    }).map((user) => {
        return user.email;
    });
}
console.log(userAdmin(users));
//# sourceMappingURL=exercicio5.js.map