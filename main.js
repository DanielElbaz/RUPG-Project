import { APIRequests } from './model'
const api = new APIRequests();

export class Main {
    constructor() {}

    generate() {
        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("generate")) {
                api.randomUser();
                api.getFriends();
                api.poke();
                api.randomKanyeQuote();
                api.baconIpsum();
            }
        })
    }
}
