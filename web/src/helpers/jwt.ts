export class JWT {
    static addJwt(token: string) {
        localStorage.setItem("jwt", token);
    }

    static getJwt() {
        return localStorage.getItem("jwt");
    }

    static logOut() {
        localStorage.removeItem("jwt");
    }
}
