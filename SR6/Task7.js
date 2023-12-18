class Client {

    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    get getLogin() {
        return this.#login;
    }

    get getPassword() {
        return this.#password;
    }

    set setLogin(login) {
        this.#login = login;
    }

    set setPassword(password) {
        this.#password = password;
    }
}

let client = new Client("Name", "Pass");

console.log(client.login);
console.log(client.getLogin);
console.log(client.getPassword);

client.setLogin = "Another name";
client.setPassword = "Another password";

console.log(client.getLogin);
console.log(client.getPassword);